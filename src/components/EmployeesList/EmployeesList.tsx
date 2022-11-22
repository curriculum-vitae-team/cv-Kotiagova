import { Button, Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React, { useState } from 'react'

export type Employee = {
  key: string
  firstName: string
  lastName: string
  email: string
  department: string
  specialization: string
}

type Props = {
  searchedEmployee: string
  employeeList: Employee[]
  newEmployeeContent: Employee
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  setIsNewEmployeeModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  setNewEmployeeContent: React.Dispatch<React.SetStateAction<Employee>>
}

const EmployeesList: React.FC<Props> = ({
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

  return (
    <Table
      pagination={{
        pageSize: 6
      }}
      expandedRowKeys={expandedRowKeys}
      onExpand={(_, record) => {
        setNewEmployeeContent(record)
        setExpandedRowKeys((prevRowKeys) => {
          if (prevRowKeys[0] === record.key) {
            return []
          }
          return [record.key]
        })
      }}
      expandable={{
        expandRowByClick: true,
        expandedRowRender: (record) => {
          return (
            <>
              <Button type='default' onClick={() => handleUpdateButtonClick(record)}>
                Update
              </Button>
              <Button type='primary' onClick={() => handleDeleteButtonClick(record)}>
                Delete
              </Button>
            </>
          )
        }
      }}
      dataSource={employeeList}
      columns={columns}
      size='large'
    />
  )
}

export default EmployeesList
