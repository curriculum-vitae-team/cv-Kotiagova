import React, { useEffect, useState } from 'react'
import { bindActionCreators } from 'redux'

import { Button, Typography } from 'antd'

import { actionCreators, useAppDispatch, useAppSelector } from '@/state'

import DeleteEmployeeModal from '@/components/DeleteEmployeeModal/DeleteEmployeeModal'
import EmployeesList from '@/components/EmployeesList/EmployeesList'
import NewEmployeeModal from '@/components/NewEmployeeModal/NewEmployeeModal'
import UpdateEmployeeModal from '@/pages/EmployeesPage/components/UpdateEmployeeModal/UpdateEmployeeModal'

import useAddEmployee from './hooks/useAddEmployee'
import useDeleteEmployee from './hooks/useDeleteEmployee'
import useGetEmployees from './hooks/useGetEmployees'
import useUpdateEmployee from './hooks/useUpdateEmployee'

import { StyledSearch, StyledTableControls } from './EmployeesPage.styles'

const { Title } = Typography

const EmployeesPage = () => {
  const { user, employees, selectedEmployee } = useAppSelector((state) => state)

  const dispatch = useAppDispatch()
  const { setEmployeeList } = bindActionCreators(actionCreators, dispatch)

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

  const handleAddEmployee = (addFormValues) => {
    addEmployee(addFormValues)
    setIsNewEmployeeModalOpen(false)
  }

  const handleDeleteEmployee = () => {
    deleteEmployee()
    setIsDeleteModalOpen(false)
  }

  const handleUpdateEmployee = (updateFormValues) => {
    updateEmployee(updateFormValues, selectedEmployee.id, (updateUser) => {
      setEmployeeList(
        employees.map((employee) => (employee.id === updateUser.id ? updateUser : employee))
      )
    })
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
