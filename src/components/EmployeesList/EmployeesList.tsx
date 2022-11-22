import { Button, Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React, { useState } from 'react'

export type Employee = {
  firstName: string
  lastName: string
  email: string
  department: string
  specialization: string
}

type Props = {
  searchedEmployee: string
  employeeList: Employee[]
}

const EmployeesList: React.FC<Props> = ({ searchedEmployee, employeeList }) => {
  const columns: ColumnsType<Employee> = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      filteredValue: [searchedEmployee],
      key: 'firstName',
      width: '15%',
      onFilter: (value: string, record: Employee) =>
        record.firstName.toLowerCase().includes(value.toLowerCase()) ||
        record.lastName.toLowerCase().includes(value.toLowerCase()),
      sorter: (a, b) => a.firstName.localeCompare(b.firstName)
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
      width: '15%',
      sorter: (a: Employee, b: Employee) => a.lastName.localeCompare(b.lastName)
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      width: '30%',
      sorter: (a: Employee, b: Employee) => a.email.localeCompare(b.email)
    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
      width: '20%',
      sorter: (a: Employee, b: Employee) => a.department.localeCompare(b.department)
    },
    {
      title: 'Specialization',
      dataIndex: 'specialization',
      key: 'specialization',
      width: '20%',
      sorter: (a: Employee, b: Employee) => a.specialization.localeCompare(b.specialization)
    }
  ]

  const [expandedKey, setExpandedKey] = useState([])

  return (
    <Table
      pagination={{
        pageSize: 6
      }}
      onRow={(_, rowIndex) => {
        return {
          onClick: () => setExpandedKey([`${rowIndex}`])
        }
      }}
      expandable={{
        expandedRowKeys: expandedKey,
        expandRowByClick: true,
        expandedRowRender: (employee, index) => {
          alert('i get expanded')
          return <p style={{ margin: 0 }}>{employee.email}</p>
        }
      }}
      dataSource={employeeList}
      columns={columns}
      size='large'
    />
  )
}

export default EmployeesList
