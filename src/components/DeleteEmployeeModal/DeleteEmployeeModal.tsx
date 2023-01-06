import React from 'react'

import { useAppSelector } from '@/state'
import { Modal } from 'antd'

type DeleteEmployeeModalProps = {
  isDeleteModalOpen: boolean
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  handleDeleteEmployee: () => void
}

const DeleteEmployeeModal: React.FC<DeleteEmployeeModalProps> = ({
  isDeleteModalOpen,
  setIsDeleteModalOpen,
  handleDeleteEmployee
}) => {
  const selectedEmployee = useAppSelector((state) => state.selectedEmployee)

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
