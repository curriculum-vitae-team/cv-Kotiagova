import React, { useEffect, useState } from 'react'

import { Typography } from 'antd'

import { useAppSelector } from '@/state'

import UpdateEmployeeModal from '@/pages/EmployeesPage/components/UpdateEmployeeModal/UpdateEmployeeModal'

import { DeleteEmployeeModal, EmployeesList, NewEmployeeModal } from '../../components/index'

import { useAddEmployee, useDeleteEmployee, useGetEmployees, useUpdateEmployee } from './hooks'

import { UpdateEmployeeFormValues } from '@/components/UpdateEmployeeForm/types'

import { StyledSearch, StyledTableControls } from './EmployeesPage.styles'

import { PrimaryButton } from '@/UI/buttons'
import { AddEmployeeFormValues } from './types'

const { Title } = Typography

const EmployeesPage = () => {
  const { user, selectedEmployee } = useAppSelector((state) => state)

  const [searchedEmployee, setSearchedEmployee] = useState('')
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isNewEmployeeModalOpen, setIsNewEmployeeModalOpen] = useState(false)
  const [isUpdateEmployeeModalOpen, setIsUpdateEmployeeModalOpen] = useState(false)

  const { addEmployee, isFetching: isAddFetching } = useAddEmployee()
  const { getEmployees, isFetching: isGetFetching } = useGetEmployees()
  const { deleteEmployee, isFetching: isDeleteFetching } = useDeleteEmployee()
  const { updateEmployee, isFetching: isUpdateFetching } = useUpdateEmployee()

  const isAnythingFetching: boolean =
    isAddFetching || isGetFetching || isDeleteFetching || isUpdateFetching

  useEffect(() => {
    getEmployees()
  }, [])

  const handleAddEmployeeButtonClick = () => {
    setIsNewEmployeeModalOpen(true)
  }

  const handleAddEmployee = (addFormValues: AddEmployeeFormValues) => {
    addEmployee(addFormValues)
    setIsNewEmployeeModalOpen(false)
  }

  const handleDeleteEmployee = () => {
    deleteEmployee()
    setIsDeleteModalOpen(false)
  }

  const handleUpdateEmployee = (updateFormValues: UpdateEmployeeFormValues) => {
    updateEmployee(updateFormValues)
    setIsUpdateEmployeeModalOpen(false)
  }

  return (
    <>
      <StyledTableControls>
        <Title level={3}>Employee list</Title>
        {user.is_verified && (
          <PrimaryButton onClick={handleAddEmployeeButtonClick}>Add employee</PrimaryButton>
        )}
      </StyledTableControls>
      <StyledSearch
        placeholder='Search for an employee...'
        onChange={(e) => setSearchedEmployee(e.target.value)}
      />
      <EmployeesList
        isFetching={isAnythingFetching}
        searchedEmployee={searchedEmployee}
        setIsDeleteModalOpen={setIsDeleteModalOpen}
        setIsUpdateEmployeeModalOpen={setIsUpdateEmployeeModalOpen}
      />
      {user.is_verified && (
        <>
          <NewEmployeeModal
            addEmployee={handleAddEmployee}
            isNewEmployeeModalOpen={isNewEmployeeModalOpen}
            setIsNewEmployeeModalOpen={setIsNewEmployeeModalOpen}
          />
          <DeleteEmployeeModal
            handleDeleteEmployee={handleDeleteEmployee}
            isDeleteModalOpen={isDeleteModalOpen}
            setIsDeleteModalOpen={setIsDeleteModalOpen}
          />
          <UpdateEmployeeModal
            key={selectedEmployee.id}
            handleUpdateEmployee={handleUpdateEmployee}
            setIsUpdateEmployeeModalOpen={setIsUpdateEmployeeModalOpen}
            isUpdateEmployeeModalOpen={isUpdateEmployeeModalOpen}
          />
        </>
      )}
    </>
  )
}

export default EmployeesPage
