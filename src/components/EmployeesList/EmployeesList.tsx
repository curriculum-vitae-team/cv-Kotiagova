import { Button, Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import { ExpandableConfig } from 'antd/lib/table/interface'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ExpandedRow, UpdateButton } from './EmployeesList.style'
import { useColumns } from './hooks/useColumns'

export type Employee = {
  department_name: string
  position_name: string
  id: string
  created_at: string
  email: string
  is_verified: boolean
  profile: {
    id: number
    first_name: string
    last_name: string
  }
  skills: [
    {
      skill_name: string
      mastery: string
    }
  ]
  languages: [
    {
      language_name: string
      proficiency: string
    }
  ]
  role: string
}

type EmployeesListProps = {
  isAdmin: boolean
  isFetching: boolean
  searchedEmployee: string
  employeeList: Employee[]
  newEmployeeContent: Employee
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  setNewEmployeeContent: React.Dispatch<React.SetStateAction<Employee>>
  setIsNewEmployeeModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const EmployeesList: React.FC<EmployeesListProps> = ({
  isAdmin,
  isFetching,
  employeeList,
  searchedEmployee,
  setIsDeleteModalOpen,
  setNewEmployeeContent,
  setIsNewEmployeeModalOpen
}) => {
  const columns: ColumnsType<Employee> = useColumns(searchedEmployee)
  const navigate = useNavigate()
  const location = useLocation()

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
      if (prevRowKeys[0] === record.id) {
        return []
      }
      return [record.id]
    })
  }

  const expandableConfig: ExpandableConfig<Employee> = {
    expandRowByClick: true,
    expandedRowRender: (record: Employee) => {
      return (
        <ExpandedRow>
          <Button type='link' onClick={() => navigate(`${location.pathname}/${record.id}`)}>
            View Profile
          </Button>
          {isAdmin && (
            <>
              <UpdateButton type='default' onClick={() => handleUpdateButtonClick(record)}>
                Update
              </UpdateButton>
              <Button type='primary' onClick={() => handleDeleteButtonClick(record)}>
                Delete
              </Button>
            </>
          )}
        </ExpandedRow>
      )
    }
  }

  return (
    <Table
      tableLayout='auto'
      pagination={false}
      expandedRowKeys={expandedRowKeys}
      onExpand={handleExpand}
      expandable={expandableConfig}
      dataSource={employeeList}
      columns={columns}
      bordered
      loading={isFetching}
      rowKey='id'
      scroll={{
        y: 400
      }}
    />
  )
}

export default EmployeesList
