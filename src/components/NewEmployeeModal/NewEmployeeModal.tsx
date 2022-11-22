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
      centered
      open={isNewEmployeeModalOpen}
      onOk={() => (wasEmpty ? addEmployee() : updateEmployee())}
      onCancel={() => setIsNewEmployeeModalOpen(false)}
    >
      <Form>
        <Form.Item>
          <Input
            onChange={(e) => handleChange(e, 'firstName')}
            value={newEmployeeContent.firstName}
            placeholder={'First Name'}
          />
        </Form.Item>
        <Form.Item>
          <Input
            onChange={(e) => handleChange(e, 'lastName')}
            value={newEmployeeContent.lastName}
            placeholder={'Last Name'}
          />
        </Form.Item>
        <Form.Item>
          <Input
            value={newEmployeeContent.email}
            onChange={(e) => handleChange(e, 'email')}
            placeholder={'Email'}
          />
        </Form.Item>
        <Form.Item>
          <Input
            value={newEmployeeContent.department}
            onChange={(e) => handleChange(e, 'department')}
            placeholder={'Department'}
          />
        </Form.Item>
        <Form.Item>
          <Input
            value={newEmployeeContent.specialization}
            onChange={(e) => handleChange(e, 'specialization')}
            placeholder={'Specialization'}
          />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default NewEmployeeModal
