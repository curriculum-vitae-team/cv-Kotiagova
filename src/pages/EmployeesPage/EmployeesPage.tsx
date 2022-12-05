import { Button, Typography } from 'antd'
import React, { useState } from 'react'

import { useAppSelector } from '@/state'

import DeleteEmployeeModal from '@/components/DeleteEmployeeModal/DeleteEmployeeModal'
import EmployeesList from '@/components/EmployeesList/EmployeesList'
import NewEmployeeModal from '@/components/NewEmployeeModal/NewEmployeeModal'
import UpdateEmployeeModal from '@/components/UpdateEmployeeModal/UpdateEmployeeModal'

import useAddEmployee from './hooks/useAddEmployee'
import useDeleteEmployee from './hooks/useDeleteEmployee'
import useFetchEmployees from './hooks/useFetchEmployees'
import useUpdateEmployee from './hooks/useUpdateEmployee'
import { initialEmployee } from './InitialEmployee'

import { StyledSearch, StyledTableControls } from './EmployeesPage.styles'

const { Title } = Typography

const EmployeesPage = () => {
  const user = useAppSelector((state) => state.user)

  const [isFetching, setIsFetching] = useState(true)
  const [searchedEmployee, setSearchedEmployee] = useState('')
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isNewEmployeeModalOpen, setIsNewEmployeeModalOpen] = useState(false)
  const [isUpdateEmployeeModalOpen, setIsUpdateEmployeeModalOpen] = useState(false)
  const [employeeList, setEmployeeList] = useState<EmployeesPageUser[]>([])

  const [selectedEmployee, setSelectedEmployee] = useState<EmployeesPageUser>(initialEmployee)

  const addEmployee = useAddEmployee()
  const deleteEmployee = useDeleteEmployee()
  const updateEmployee = useUpdateEmployee()

  useFetchEmployees(setIsFetching, setEmployeeList)

  const handleAddEmployeeButtonClick = () => {
    setIsNewEmployeeModalOpen(true)
  }

  const handleAddEmployee = (addFormValues) => {
    setIsFetching(true)
    addEmployee(addFormValues, setEmployeeList, setIsFetching)
    setIsNewEmployeeModalOpen(false)
  }

  const handleDeleteEmployee = () => {
    setIsFetching(true)
    deleteEmployee(selectedEmployee, setEmployeeList, setIsFetching)
    setIsDeleteModalOpen(false)
  }

  const handleUpdateEmployee = (updateFormValues) => {
    setIsFetching(true)
    updateEmployee(updateFormValues, selectedEmployee, setEmployeeList, setIsFetching)
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
        isFetching={isFetching}
        employeeList={employeeList}
        searchedEmployee={searchedEmployee}
        setIsDeleteModalOpen={setIsDeleteModalOpen}
        setSelectedEmployee={setSelectedEmployee}
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
            selectedEmployee={selectedEmployee}
            setIsDeleteModalOpen={setIsDeleteModalOpen}
          />
          <UpdateEmployeeModal
            handleUpdateEmployee={handleUpdateEmployee}
            selectedEmployee={selectedEmployee}
            setIsUpdateEmployeeModalOpen={setIsUpdateEmployeeModalOpen}
            isUpdateEmployeeModalOpen={isUpdateEmployeeModalOpen}
          />
        </>
      )}
    </>
  )
}

export default EmployeesPage
