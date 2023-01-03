import React, { useEffect } from 'react'

import { Spin } from 'antd'

import UpdateEmployeeForm from '@/components/UpdateEmployeeForm/UpdateEmployeeForm'
import useUpdateEmployee from '@/pages/EmployeesPage/hooks/useUpdateEmployee'
import { useForm } from 'antd/es/form/Form'

type ProfileProps = {
  id: string
  canEdit: boolean
  employee: ProfilePageUser
  setEmployee: React.Dispatch<React.SetStateAction<ProfilePageUser>>
}

const Profile: React.FC<ProfileProps> = ({ id, employee, canEdit, setEmployee }) => {
  const [form] = useForm()
  const { updateEmployee, isFetching } = useUpdateEmployee()

  const initialValues = {
    first_name: employee?.profile.first_name,
    last_name: employee?.profile.last_name,
    positionId: employee?.position?.id,
    departmentId: employee?.department?.id
  }

  const handleSubmit = (formValues) => {
    updateEmployee(formValues, id, (updateUser) => {
      setEmployee(updateUser)
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
