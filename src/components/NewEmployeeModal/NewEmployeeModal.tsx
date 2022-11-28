import { Form, Input, Modal } from 'antd'
import React, { useMemo } from 'react'
import { Employee } from '../EmployeesList/EmployeesList'

type NewEmployeeModalProps = {
  newEmployeeContent: Employee
  isNewEmployeeModalOpen: boolean
  setIsNewEmployeeModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  setNewEmployeeContent: React.Dispatch<React.SetStateAction<Employee>>
  updateEmployee: () => void
  addEmployee: () => void
}

const NewEmployeeModal: React.FC<NewEmployeeModalProps> = ({
  newEmployeeContent,
  isNewEmployeeModalOpen,
  setIsNewEmployeeModalOpen,
  updateEmployee,
  setNewEmployeeContent,
  addEmployee
}) => {
  //true if no employee was selected, i.e add button was clicked
  const wasEmpty = useMemo(() => newEmployeeContent.firstName === '', [isNewEmployeeModalOpen])

  const [form] = Form.useForm()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof Employee) => {
    setNewEmployeeContent((prevEmployeeContent) => ({
      ...prevEmployeeContent,
      [field]: e.target.value
    }))
  }

  const handleSubmit = () => {
    if (wasEmpty) {
      addEmployee()
    } else {
      updateEmployee()
    }
  }

  return (
    <Modal
      title='Input Employee Info'
      centered
      open={isNewEmployeeModalOpen}
      onOk={handleSubmit}
      onCancel={() => setIsNewEmployeeModalOpen(false)}
    >
      <Form form={form}>
        <Form.Item>
          <Input
            required
            placeholder={'First Name'}
            value={newEmployeeContent.firstName}
            onChange={(e) => handleChange(e, 'firstName')}
          />
        </Form.Item>
        <Form.Item>
          <Input
            placeholder={'Last Name'}
            value={newEmployeeContent.lastName}
            onChange={(e) => handleChange(e, 'lastName')}
          />
        </Form.Item>
        <Form.Item>
          <Input
            placeholder={'Email'}
            value={newEmployeeContent.email}
            onChange={(e) => handleChange(e, 'email')}
          />
        </Form.Item>
        <Form.Item>
          <Input
            placeholder={'Department'}
            value={newEmployeeContent.department}
            onChange={(e) => handleChange(e, 'department')}
          />
        </Form.Item>
        <Form.Item>
          <Input
            placeholder={'Specialization'}
            value={newEmployeeContent.specialization}
            onChange={(e) => handleChange(e, 'specialization')}
          />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default NewEmployeeModal
