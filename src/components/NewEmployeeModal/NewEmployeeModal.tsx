import { Button, Form, Input, Modal, Select } from 'antd'
import React, { useEffect, useState } from 'react'

type NewEmployeeModalProps = {
  isNewEmployeeModalOpen: boolean
  setIsNewEmployeeModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  addEmployee: (values: Employee) => void
}

const NewEmployeeModal: React.FC<NewEmployeeModalProps> = ({
  isNewEmployeeModalOpen,
  setIsNewEmployeeModalOpen,
  addEmployee
}) => {
  const [role, setRole] = useState('employee')
  const [form] = Form.useForm()

  useEffect(() => {
    return () => {
      form.resetFields()
    }
  })

  const handleSubmit = (values: Employee) => {
    addEmployee({ ...values, role: role })
  }

  const selectOptions = [
    {
      value: 'employee',
      label: 'employee'
    },
    {
      value: 'admin',
      label: 'admin'
    }
  ]

  return (
    <Modal
      title='Input Employee Info'
      centered
      open={isNewEmployeeModalOpen}
      footer={null}
      onCancel={() => setIsNewEmployeeModalOpen(false)}
    >
      <Form
        form={form}
        onFinish={handleSubmit}
        initialValues={{
          role: role
        }}
      >
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
        <Form.Item name='department_name'>
          <Input placeholder={'Department'} />
        </Form.Item>
        <Form.Item name='position_name'>
          <Input placeholder={'Specialization'} />
        </Form.Item>
        <Form.Item name='role' required>
          <Select options={selectOptions} onChange={setRole} placeholder={'Role'} />
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
