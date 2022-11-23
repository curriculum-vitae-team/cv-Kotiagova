import { Button, Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React, { useState } from 'react'
import { ExpandedRow, UpdateButton } from './EmployeesList.style'

export type Employee = {
  key: string
  firstName: string
  lastName: string
  email: string
  department: string
  specialization: string
}

type EmployeesListProps = {
  searchedEmployee: string
  employeeList: Employee[]
  newEmployeeContent: Employee
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  setIsNewEmployeeModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  setNewEmployeeContent: React.Dispatch<React.SetStateAction<Employee>>
}

const EmployeesList: React.FC<EmployeesListProps> = ({
  searchedEmployee,
  employeeList,
  setNewEmployeeContent,
  setIsNewEmployeeModalOpen,
  setIsDeleteModalOpen
}) => {
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

  const [expandedRowKeys, setExpandedRowKeys] = useState([])

  const handleDeleteButtonClick = (record: Employee) => {
    setIsDeleteModalOpen(true)
    setNewEmployeeContent(record)
    setExpandedRowKeys([])
  }

  const handleUpdateButtonClick = (record: Employee) => {
    setIsNewEmployeeModalOpen(true)
    setNewEmployeeContent(record)
    setExpandedRowKeys([])
  }

  const handleExpand = (expanded: boolean, record: Employee) => {
    setNewEmployeeContent(record)
    setExpandedRowKeys((prevRowKeys) => {
      if (prevRowKeys[0] === record.key) {
        return []
      }
      return [record.key]
    })
  }

  const expandableConfig = {
    expandRowByClick: true,
    expandedRowRender: (record: Employee) => {
      return (
        <ExpandedRow>
          <UpdateButton type='default' onClick={() => handleUpdateButtonClick(record)}>
            Update
          </UpdateButton>
          <Button type='primary' onClick={() => handleDeleteButtonClick(record)}>
            Delete
          </Button>
        </ExpandedRow>
      )
    }
  }

  const paginationConfig = {
    pageSize: 6
  }

  return (
    <Table
      pagination={paginationConfig}
      expandedRowKeys={expandedRowKeys}
      onExpand={handleExpand}
      expandable={expandableConfig}
      dataSource={employeeList}
      columns={columns}
      size='large'
    />
  )
}

export default EmployeesList
