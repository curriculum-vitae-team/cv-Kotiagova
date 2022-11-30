import { Modal } from 'antd'
import React from 'react'

type DeleteEmployeeModalProps = {
  deletedEmployeeContent: Employee
  isDeleteModalOpen: boolean
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  handleDeleteEmployee: () => void
}

const DeleteEmployeeModal: React.FC<DeleteEmployeeModalProps> = ({
  deletedEmployeeContent,
  isDeleteModalOpen,
  setIsDeleteModalOpen,
  handleDeleteEmployee
}) => {
  return (
    <Modal
      title={`Delete ${deletedEmployeeContent.profile.first_name}`}
      centered
      open={isDeleteModalOpen}
      onOk={() => handleDeleteEmployee()}
      onCancel={() => setIsDeleteModalOpen(false)}
    >
      <p>
        Do you want to delete {deletedEmployeeContent.profile.first_name}{' '}
        {deletedEmployeeContent.profile.last_name}?
      </p>
    </Modal>
  )
}

export default DeleteEmployeeModal
