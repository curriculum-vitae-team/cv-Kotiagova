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
  //true if no employee was selected, i.e. add button was clicked
  const wasEmpty = useMemo(
    () => newEmployeeContent.profile.first_name === '',
    [isNewEmployeeModalOpen]
  )

  const [form] = Form.useForm()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof Employee) => {
    setNewEmployeeContent((prevEmployeeContent) => ({
      ...prevEmployeeContent,
      [field]: e.target.value
    }))
  }

  const handleNameChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: 'first_name' | 'last_name'
  ) => {
    setNewEmployeeContent((prevEmployeeContent) => ({
      ...prevEmployeeContent,
      profile: {
        ...prevEmployeeContent.profile,
        [field]: e.target.value
      }
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
            value={newEmployeeContent.profile.first_name}
            onChange={(e) => handleNameChange(e, 'first_name')}
          />
        </Form.Item>
        <Form.Item>
          <Input
            placeholder={'Last Name'}
            value={newEmployeeContent.profile.last_name}
            onChange={(e) => handleNameChange(e, 'last_name')}
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
            value={newEmployeeContent.department_name}
            onChange={(e) => handleChange(e, 'department_name')}
          />
        </Form.Item>
        <Form.Item>
          <Input
            placeholder={'Specialization'}
            value={newEmployeeContent.position_name}
            onChange={(e) => handleChange(e, 'position_name')}
          />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default NewEmployeeModal
