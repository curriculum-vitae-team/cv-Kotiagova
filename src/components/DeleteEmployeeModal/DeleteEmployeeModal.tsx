import { Modal } from 'antd'
import React from 'react'
import { Employee } from '../EmployeesList/EmployeesList'

type DeleteEmployeeModalProps = {
  deletedEmployeeContent: Employee
  isDeleteModalOpen: boolean
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  deleteEmployee: () => void
}

const DeleteEmployeeModal: React.FC<DeleteEmployeeModalProps> = ({
  deletedEmployeeContent,
  isDeleteModalOpen,
  setIsDeleteModalOpen,
  deleteEmployee
}) => {
  return (
    <Modal
      title={`Delete ${deletedEmployeeContent.firstName}`}
      centered
      open={isDeleteModalOpen}
      onOk={() => deleteEmployee()}
      onCancel={() => setIsDeleteModalOpen(false)}
    >
      <p>
        Do you want to delete {deletedEmployeeContent.firstName} {deletedEmployeeContent.lastName}?
      </p>
    </Modal>
  )
}

export default DeleteEmployeeModal
