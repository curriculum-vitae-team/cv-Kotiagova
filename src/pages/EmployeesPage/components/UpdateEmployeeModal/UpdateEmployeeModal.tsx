import React from 'react'

import { useAppSelector } from '@/state'
import { Modal } from 'antd'
import UpdateEmployeeForm from '../../../../components/UpdateEmployeeForm/UpdateEmployeeForm'

type UpdateEmployeeModalProps = {
  handleUpdateEmployee: (formValues) => void
  isUpdateEmployeeModalOpen: boolean
  setIsUpdateEmployeeModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const UpdateEmployeeModal: React.FC<UpdateEmployeeModalProps> = ({
  handleUpdateEmployee,
  isUpdateEmployeeModalOpen,
  setIsUpdateEmployeeModalOpen
}) => {
  const selectedEmployee = useAppSelector((state) => state.selectedEmployee)

  const handleSubmit = (formValues) => {
    handleUpdateEmployee(formValues)
  }

  const initialValues = {
    first_name: selectedEmployee.profile.first_name,
    last_name: selectedEmployee.profile.last_name,
    departmentId: selectedEmployee.department?.id,
    positionId: selectedEmployee.position?.id
  }

  return (
    <Modal
      centered
      footer={null}
      title='Input Employee Info'
      open={isUpdateEmployeeModalOpen}
      onCancel={() => {
        setIsUpdateEmployeeModalOpen(false)
      }}
    >
      <UpdateEmployeeForm handleSubmit={handleSubmit} initialValues={initialValues} canEdit />
    </Modal>
  )
}

export default UpdateEmployeeModal
