import React, { useEffect } from 'react'

import { Button, Form, Input, Modal, Select } from 'antd'

import { useOptions } from '../UpdateEmployeeForm/hooks/useOptions'

import { AddEmployeeFormValues } from '@/pages/EmployeesPage/types'

type NewEmployeeModalProps = {
  isNewEmployeeModalOpen: boolean
  setIsNewEmployeeModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  addEmployee: (values: AddEmployeeFormValues) => void
}

const NewEmployeeModal: React.FC<NewEmployeeModalProps> = ({
  isNewEmployeeModalOpen,
  setIsNewEmployeeModalOpen,
  addEmployee
}) => {
  const [form] = Form.useForm()
  const { departments, positions } = useOptions()

  useEffect(() => {
    return () => {
      form.resetFields()
    }
  })

  const handleSubmit = (values: AddEmployeeFormValues) => {
    addEmployee(values)
  }

  const departmentOptions = departments?.map((department) => ({
    value: department.id,
    label: department.name
  }))

  const positionOptions = positions?.map((positions) => ({
    value: positions.id,
    label: positions.name
  }))

  return (
    <Modal
      title='Input Employee Info'
      centered
      open={isNewEmployeeModalOpen}
      footer={null}
      onCancel={() => setIsNewEmployeeModalOpen(false)}
    >
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item name='first_name'>
          <Input placeholder={'First Name'} />
        </Form.Item>
        <Form.Item name='last_name'>
          <Input placeholder={'Last Name'} />
        </Form.Item>
        <Form.Item name='email'>
          <Input required placeholder={'Email'} type='email' />
        </Form.Item>
        <Form.Item name='password'>
          <Input.Password required type='password' placeholder={'Password'} />
        </Form.Item>
        <Form.Item name='department_id'>
          <Select options={departmentOptions} />
        </Form.Item>
        <Form.Item name='position_id'>
          <Select options={positionOptions} />
        </Form.Item>
        <Form.Item>
          <Button block type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default NewEmployeeModal
