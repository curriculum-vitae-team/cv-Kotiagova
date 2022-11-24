import { Button, Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React, { useState } from 'react'
import { ExpandedRow, UpdateButton } from './EmployeesList.style'
import { useColumns } from './hooks/useColumns'

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
  const columns: ColumnsType<Employee> = useColumns(searchedEmployee)

  const [expandedRowKeys, setExpandedRowKeys] = useState<string[]>([])

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
