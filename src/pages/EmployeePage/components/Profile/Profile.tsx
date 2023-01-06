import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'

import { Spin } from 'antd'
import { useForm } from 'antd/es/form/Form'

import { actionCreators, useAppDispatch } from '@/state'

import UpdateEmployeeForm from '@/components/UpdateEmployeeForm/UpdateEmployeeForm'
import useUpdateEmployee from '@/pages/EmployeesPage/hooks/useUpdateEmployee'

type ProfileProps = {
  id: string
  canEdit: boolean
  employee: Employee
}

const Profile: React.FC<ProfileProps> = ({ id, employee, canEdit }) => {
  const [form] = useForm()
  const { updateEmployee, isFetching } = useUpdateEmployee()
  const dispatch = useAppDispatch()
  const { setSelectedEmployee } = bindActionCreators(actionCreators, dispatch)

  const initialValues = {
    first_name: employee?.profile.first_name,
    last_name: employee?.profile.last_name,
    positionId: employee?.position?.id,
    departmentId: employee?.department?.id
  }

  const handleSubmit = (formValues) => {
    updateEmployee(formValues, id, (updateUser) => {
      setSelectedEmployee(updateUser)
    })
  }

  useEffect(() => {
    return () => {
      form.resetFields()
    }
  })

  return isFetching ? (
    <Spin />
  ) : (
    <UpdateEmployeeForm
      canEdit={canEdit}
      initialValues={initialValues}
      handleSubmit={handleSubmit}
    />
  )
}

export default Profile
