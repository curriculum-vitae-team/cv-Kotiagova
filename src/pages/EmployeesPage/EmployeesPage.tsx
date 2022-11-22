import EmployeesList from '@/components/EmployeesList/EmployeesList'
import React, { useState } from 'react'

import { Button, Typography } from 'antd'
import Search from 'antd/lib/input/Search'
import { mockEmployeeList } from './mocks/employeeList'
import { nanoid } from 'nanoid'

const { Title } = Typography

const EmployeesPage = () => {
  const [searchedEmployee, setSearchedEmployee] = useState('')
  const [employeeList, setEmployeeList] = useState(mockEmployeeList)

  const addEmployee = () => {
    setEmployeeList((prevEmployeeList) =>
      prevEmployeeList.concat({
        key: nanoid(),
        firstName: 'Anton',
        lastName: 'Antonov',
        department: 'IOS',
        email: 'Anton.Antonov@gmail.com',
        specialization: 'UIKit'
      })
    )
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Title level={3}>Employee list</Title>
        <Button onClick={addEmployee}>Add employee</Button>
      </div>
      <Search
        onChange={(e) => setSearchedEmployee(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <EmployeesList
        searchedEmployee={searchedEmployee}
        employeeList={employeeList}
        setEmployeeList={setEmployeeList}
      />
    </>
  )
}

export default EmployeesPage
