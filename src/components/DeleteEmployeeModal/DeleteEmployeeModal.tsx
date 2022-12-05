import React from 'react'

import { Modal } from 'antd'

type DeleteEmployeeModalProps = {
  selectedEmployee: EmployeesPageUser
  isDeleteModalOpen: boolean
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  handleDeleteEmployee: () => void
}

const DeleteEmployeeModal: React.FC<DeleteEmployeeModalProps> = ({
  selectedEmployee,
  isDeleteModalOpen,
  setIsDeleteModalOpen,
  handleDeleteEmployee
}) => {
  return (
    <Modal
      title={`Delete ${selectedEmployee.profile.first_name}`}
      centered
      open={isDeleteModalOpen}
      onOk={() => handleDeleteEmployee()}
      onCancel={() => setIsDeleteModalOpen(false)}
    >
      <p>
        Do you want to delete {selectedEmployee.profile.first_name}{' '}
        {selectedEmployee.profile.last_name}?
      </p>
    </Modal>
  )
}

export default DeleteEmployeeModal
