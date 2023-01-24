import React from 'react'

import { UpdateEmployeeFormValues } from '@/components/UpdateEmployeeForm/types'
import UpdateEmployeeForm from '@/components/UpdateEmployeeForm/UpdateEmployeeForm'

import { useUpdateEmployee } from '@/pages/EmployeesPage/hooks'

import { useOptions } from '@/components/UpdateEmployeeForm/hooks/useOptions'
import { StyledLoader } from '../../EmployeePage.style'

type ProfileProps = {
  canEdit: boolean
  firstName: string
  lastName: string
  positionId: string
  departmentId: string
  isEmployeeFetching: boolean
}

const Profile: React.FC<ProfileProps> = ({
  isEmployeeFetching,
  canEdit,
  lastName,
  firstName,
  positionId,
  departmentId
}) => {
  const { updateEmployee, isFetching: isUpdateFetching } = useUpdateEmployee()
  const { departments, positions, isFetching: areOptionsFetching } = useOptions()

  const initialValues = {
    first_name: firstName,
    last_name: lastName,
    positionId,
    departmentId
  }

  const isLoading = isUpdateFetching || areOptionsFetching || isEmployeeFetching

  const handleSubmit = (formValues: UpdateEmployeeFormValues) => {
    updateEmployee(formValues)
  }

  return isLoading ? (
    <StyledLoader />
  ) : (
    <UpdateEmployeeForm
      departments={departments}
      positions={positions}
      canEdit={canEdit}
      initialValues={initialValues}
      handleSubmit={handleSubmit}
    />
  )
}

export default Profile
