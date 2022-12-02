import DeleteEmployeeModal from '@/components/DeleteEmployeeModal/DeleteEmployeeModal'
import EmployeesList from '@/components/EmployeesList/EmployeesList'
import NewEmployeeModal from '@/components/NewEmployeeModal/NewEmployeeModal'
import UpdateEmployeeModal from '@/components/UpdateEmployeeModal/UpdateEmployeeModal'
import { ADD_EMPLOYEE, DELETE_EMPLOYEE, UPDATE_EMPLOYEE } from '@/GraphQL/mutations'
import { EMPLOYEES_QUERY } from '@/GraphQL/queries'
import { useAppSelector } from '@/state'
import { useLazyQuery, useMutation } from '@apollo/client'
import { Button, Typography } from 'antd'
import React, { useEffect, useState } from 'react'
import { StyledSearch, StyledTableControls } from './EmployeesPage.styles'
import { initialEmployee } from './InitialEmployee'

const { Title } = Typography

const EmployeesPage = () => {
  const user = useAppSelector((state) => state.user)

  const [searchedEmployee, setSearchedEmployee] = useState('')
  const [isNewEmployeeModalOpen, setIsNewEmployeeModalOpen] = useState(false)
  const [isUpdateEmployeeModalOpen, setIsUpdateEmployeeModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isFetching, setIsFetching] = useState(true)
  const [employeeList, setEmployeeList] = useState<Employee[]>([])
  const [employeeToUpdate, setEmployeeToUpdate] = useState<Employee>(initialEmployee)

  const [employees] = useLazyQuery(EMPLOYEES_QUERY)
  const [addEmployee] = useMutation(ADD_EMPLOYEE)
  const [updateEmployee] = useMutation(UPDATE_EMPLOYEE)
  const [deleteEmployee] = useMutation(DELETE_EMPLOYEE)

  const fetchEmployees = () => {
    setIsFetching(true)
    employees()
      .then((res) => {
        setEmployeeList(res.data.users)
        setIsFetching(false)
      })
      .catch((err) => console.error(err))
  }

  useEffect(() => {
    fetchEmployees()
  }, [])

  const handleAddEmployeeButtonClick = () => {
    setIsNewEmployeeModalOpen(true)
  }

  const handleAddEmployee = (values) => {
    addEmployee({
      variables: {
        user: {
          auth: {
            email: values.email,
            password: values.password
          },
          profile: {
            first_name: values.first_name ?? '',
            last_name: values.last_name ?? '',
            skills: [],
            languages: []
          },
          cvsIds: [],
          role: values.role ?? 'employee',
          departmentId: '1',
          positionId: '1'
        }
      }
    })
      .then(() => {
        fetchEmployees()
      })
      .catch(console.error)
    setIsNewEmployeeModalOpen(false)
  }

  const handleDeleteEmployee = () => {
    deleteEmployee({
      variables: { id: employeeToUpdate.id }
    })
      .then(() => {
        fetchEmployees()
      })
      .catch(console.error)
    setIsDeleteModalOpen(false)
  }

  const handleUpdateEmployee = (values) => {
    updateEmployee({
      variables: {
        id: employeeToUpdate.id,
        user: values
      }
    })
      .then(() => {
        fetchEmployees()
      })
      .catch(console.error)
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
        chosenEmployee={employeeToUpdate}
        setIsDeleteModalOpen={setIsDeleteModalOpen}
        setChosenEmployee={setEmployeeToUpdate}
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
            deletedEmployeeContent={employeeToUpdate}
            setIsDeleteModalOpen={setIsDeleteModalOpen}
          />
          <UpdateEmployeeModal
            handleUpdateEmployee={handleUpdateEmployee}
            employeeToUpdate={employeeToUpdate}
            setEmployeeToUpdate={setEmployeeToUpdate}
            setIsUpdateEmployeeModalOpen={setIsUpdateEmployeeModalOpen}
            isUpdateEmployeeModalOpen={isUpdateEmployeeModalOpen}
          />
        </>
      )}
    </>
  )
}

export default EmployeesPage
