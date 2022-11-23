import { Form, Input, Modal } from 'antd'
import React, { useMemo } from 'react'
import { Employee } from '../EmployeesList/EmployeesList'

type Props = {
  newEmployeeContent: Employee
  isNewEmployeeModalOpen: boolean
  setIsNewEmployeeModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  setNewEmployeeContent: React.Dispatch<React.SetStateAction<Employee>>
  updateEmployee: () => void
  addEmployee: () => void
}

const NewEmployeeModal: React.FC<Props> = ({
  newEmployeeContent,
  isNewEmployeeModalOpen,
  setIsNewEmployeeModalOpen,
  updateEmployee,
  setNewEmployeeContent,
  addEmployee
}) => {
  const wasEmpty = useMemo(() => newEmployeeContent.firstName === '', [isNewEmployeeModalOpen])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof Employee) => {
    setNewEmployeeContent((prevEmployeeContent) => ({
      ...prevEmployeeContent,
      [field]: e.target.value
    }))
  }

  return (
    <Modal
      title='Input Employee Info'
      centered
      open={isNewEmployeeModalOpen}
      onOk={() => (wasEmpty ? addEmployee() : updateEmployee())}
      onCancel={() => setIsNewEmployeeModalOpen(false)}
    >
      <Form>
        <Form.Item>
          <Input
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
