import { Button, Typography } from 'antd'
import React, { useState } from 'react'
import { bindActionCreators } from 'redux'

import { actionCreators, useAppDispatch, useAppSelector } from '@/state'

import DeleteEmployeeModal from '@/components/DeleteEmployeeModal/DeleteEmployeeModal'
import EmployeesList from '@/components/EmployeesList/EmployeesList'
import NewEmployeeModal from '@/components/NewEmployeeModal/NewEmployeeModal'
import UpdateEmployeeModal from '@/components/UpdateEmployeeModal/UpdateEmployeeModal'

import useAddEmployee from './hooks/useAddEmployee'
import useDeleteEmployee from './hooks/useDeleteEmployee'
import useFetchEmployees from './hooks/useGetEmployees'
import useUpdateEmployee from './hooks/useUpdateEmployee'

import { StyledSearch, StyledTableControls } from './EmployeesPage.styles'

const { Title } = Typography

const EmployeesPage = () => {
  const user = useAppSelector((state) => state.user)
  const selectedEmployee = useAppSelector((state) => state.selectedEmployee)
  const dispatch = useAppDispatch()

  const { setIsLoading } = bindActionCreators(actionCreators, dispatch)

  const [searchedEmployee, setSearchedEmployee] = useState('')
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isNewEmployeeModalOpen, setIsNewEmployeeModalOpen] = useState(false)
  const [isUpdateEmployeeModalOpen, setIsUpdateEmployeeModalOpen] = useState(false)

  const addEmployee = useAddEmployee()
  const deleteEmployee = useDeleteEmployee()
  const updateEmployee = useUpdateEmployee()

  useFetchEmployees()

  const handleAddEmployeeButtonClick = () => {
    setIsNewEmployeeModalOpen(true)
  }

  const handleAddEmployee = (addFormValues) => {
    setIsLoading(true)
    addEmployee(addFormValues)
    setIsNewEmployeeModalOpen(false)
  }

  const handleDeleteEmployee = () => {
    setIsLoading(true)
    deleteEmployee()
    setIsDeleteModalOpen(false)
  }

  const handleUpdateEmployee = (updateFormValues) => {
    setIsLoading(true)
    updateEmployee(updateFormValues, selectedEmployee.id)
    setIsUpdateEmployeeModalOpen(false)
  }

  return (
    <>
      <StyledTableControls>
        <Title level={3}>Employee list</Title>
        {user.is_verified && (
          <Button type='primary' onClick={handleAddEmployeeButtonClick}>
            Add employee
          </Button>
        )}
      </StyledTableControls>
      <StyledSearch
        placeholder='Search for an employee...'
        onChange={(e) => setSearchedEmployee(e.target.value)}
      />
      <EmployeesList
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
