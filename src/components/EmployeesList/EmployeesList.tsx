import { Button, Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'

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
  setEmployeeList: React.Dispatch<React.SetStateAction<Employee[]>>
}

const EmployeesList: React.FC<Props> = ({ searchedEmployee, employeeList, setEmployeeList }) => {
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

  const deleteEmployee = (employeeToDelete) => {
    setEmployeeList((prevEmployeeList) => {
      return prevEmployeeList.filter((employee) => {
        if (employee.key !== employeeToDelete.key) {
          return employee
        }
      })
    })
  }

  return (
    <Table
      pagination={{
        pageSize: 6
      }}
      expandable={{
        expandRowByClick: true,
        expandedRowRender: (record) => (
          <>
            <Button type='default'>Update</Button>
            <Button type='primary' onClick={() => deleteEmployee(record)}>
              Delete
            </Button>
          </>
        )
      }}
      dataSource={employeeList}
      columns={columns}
      size='large'
    />
  )
}

export default EmployeesList
