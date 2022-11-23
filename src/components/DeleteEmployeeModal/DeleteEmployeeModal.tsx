import { Modal } from 'antd'
import React from 'react'
import { Employee } from '../EmployeesList/EmployeesList'

type Props = {
  newEmployeeContent: Employee
  isDeleteModalOpen: boolean
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  deleteEmployee: () => void
}

const DeleteEmployeeModal: React.FC<Props> = ({
  newEmployeeContent,
  isDeleteModalOpen,
  setIsDeleteModalOpen,
  deleteEmployee
}) => {
  return (
    <>
      <Modal
        title={`Delete ${newEmployeeContent.firstName}`}
        centered
        open={isDeleteModalOpen}
        onOk={() => deleteEmployee()}
        onCancel={() => setIsDeleteModalOpen(false)}
      >
        <p>
          Do you want to delete {newEmployeeContent.firstName} {newEmployeeContent.lastName}?
        </p>
      </Modal>
    </>
  )
}

export default DeleteEmployeeModal
