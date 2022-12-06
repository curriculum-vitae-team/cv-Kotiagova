import React, { useEffect } from 'react'

import { Button, Form, Input, Spin } from 'antd'

import useUpdateEmployee from '@/pages/EmployeesPage/hooks/useUpdateEmployee'
import { useAppSelector } from '@/state'
import { useForm } from 'antd/es/form/Form'

type ProfileProps = {
  id: string
  canEdit: boolean
  employee: ProfilePageUser
  setEmployee: React.Dispatch<React.SetStateAction<ProfilePageUser>>
}

const Profile: React.FC<ProfileProps> = ({ id, employee, canEdit, setEmployee }) => {
  const [form] = useForm()
  const updateEmployee = useUpdateEmployee()

  const isLoading = useAppSelector((state) => state.isLoading)

  const initialValues = {
    first_name: employee?.profile.first_name,
    last_name: employee?.profile.last_name,
    positionId: employee?.position?.id,
    departmentId: employee?.department?.id
  }

  const handleSubmit = (values) => {
    updateEmployee(values, id, (updateUser) => {
      setEmployee(updateUser)
    })
  }

  useEffect(() => {
    return () => {
      form.resetFields()
    }
  })

  return isLoading ? (
    <Spin />
  ) : (
    <Form form={form} initialValues={initialValues} onFinish={handleSubmit}>
      <Form.Item name='first_name'>
        <Input placeholder='First Name' />
      </Form.Item>
      <Form.Item name='last_name'>
        <Input placeholder='Last Name' />
      </Form.Item>
      <Form.Item name='departmentId'>
        <Input placeholder='Department' />
      </Form.Item>
      <Form.Item name='positionId'>
        <Input placeholder='Position' />
      </Form.Item>
      {canEdit && (
        <Button block type='primary' htmlType='submit'>
          Submit
        </Button>
      )}
    </Form>
  )
}

export default Profile
