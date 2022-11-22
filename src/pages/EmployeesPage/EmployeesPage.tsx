import EmployeesList, { Employee } from '@/components/EmployeesList/EmployeesList'
import React, { useState } from 'react'

import { Button, Typography } from 'antd'
import Search from 'antd/lib/input/Search'
import { mockEmployeeList } from './mocks/employeeList'
import { nanoid } from 'nanoid'
import NewEmployeeModal from '@/components/NewEmployeeModal/NewEmployeeModal'
import DeleteEmployeeModal from '@/components/DeleteEmployeeModal/DeleteEmployeeModal'

const { Title } = Typography

const EmployeesPage = () => {
  const [searchedEmployee, setSearchedEmployee] = useState('')
  const [isNewEmployeeModalOpen, setIsNewEmployeeModalOpen] = useState(false)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [employeeList, setEmployeeList] = useState<Employee[]>(mockEmployeeList)
  const [newEmployeeContent, setNewEmployeeContent] = useState<Employee>({
    key: nanoid(),
    firstName: '',
    lastName: '',
    email: '',
    department: '',
    specialization: ''
  })

  const handleAddEmployeeButtonClick = () => {
    setIsNewEmployeeModalOpen(true)
    setNewEmployeeContent({
      key: nanoid(),
      firstName: '',
      lastName: '',
      email: '',
      department: '',
      specialization: ''
    })
  }

  const addEmployee = () => {
    setIsNewEmployeeModalOpen(false)
    setEmployeeList((prevEmployeeList) => prevEmployeeList.concat(newEmployeeContent))
  }

  const deleteEmployee = () => {
    setIsDeleteModalOpen(false)
    setEmployeeList((prevEmployeeList) => {
      return prevEmployeeList.filter((employee) => {
        if (employee.key !== newEmployeeContent.key) {
          return employee
        }
      })
    })
  }

  const updateEmployee = () => {
    setIsNewEmployeeModalOpen(false)
    setEmployeeList((prevEmployeeList) => {
      return prevEmployeeList.map((employee) => {
        if (employee.key !== newEmployeeContent.key) {
          return employee
        }
        return newEmployeeContent
      })
    })
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Title level={3}>Employee list</Title>
        <Button onClick={handleAddEmployeeButtonClick}>Add employee</Button>
      </div>
      <Search
        onChange={(e) => setSearchedEmployee(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <EmployeesList
        searchedEmployee={searchedEmployee}
        newEmployeeContent={newEmployeeContent}
        employeeList={employeeList}
        setIsDeleteModalOpen={setIsDeleteModalOpen}
        setIsNewEmployeeModalOpen={setIsNewEmployeeModalOpen}
        setNewEmployeeContent={setNewEmployeeContent}
      />
      <NewEmployeeModal
        newEmployeeContent={newEmployeeContent}
        isNewEmployeeModalOpen={isNewEmployeeModalOpen}
        setIsNewEmployeeModalOpen={setIsNewEmployeeModalOpen}
        updateEmployee={updateEmployee}
        addEmployee={addEmployee}
        setNewEmployeeContent={setNewEmployeeContent}
      />
      <DeleteEmployeeModal
        newEmployeeContent={newEmployeeContent}
        isDeleteModalOpen={isDeleteModalOpen}
        setIsDeleteModalOpen={setIsDeleteModalOpen}
        deleteEmployee={deleteEmployee}
      />
    </>
  )
}

export default EmployeesPage
