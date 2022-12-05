import React, { useEffect } from 'react'

import { Button, Form, Input, Modal } from 'antd'

type NewEmployeeModalProps = {
  isNewEmployeeModalOpen: boolean
  setIsNewEmployeeModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  addEmployee: (values: EmployeesPageUser) => void
}

const NewEmployeeModal: React.FC<NewEmployeeModalProps> = ({
  isNewEmployeeModalOpen,
  setIsNewEmployeeModalOpen,
  addEmployee
}) => {
  const [form] = Form.useForm()

  useEffect(() => {
    return () => {
      form.resetFields()
    }
  })

  const handleSubmit = (values: EmployeesPageUser) => {
    addEmployee({ ...values })
  }

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
        <Form.Item name='department_name'>
          <Input placeholder={'Department'} />
        </Form.Item>
        <Form.Item name='position_name'>
          <Input placeholder={'Specialization'} />
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
