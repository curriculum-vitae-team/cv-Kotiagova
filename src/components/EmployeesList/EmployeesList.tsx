import { Button, Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import { ExpandableConfig } from 'antd/lib/table/interface'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ExpandedRow, UpdateButton } from './EmployeesList.style'
import { useColumns } from './hooks/useColumns'

type EmployeesListProps = {
  isAdmin: boolean
  isFetching: boolean
  searchedEmployee: string
  employeeList: Employee[]
  chosenEmployee: Employee
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  setChosenEmployee: React.Dispatch<React.SetStateAction<Employee>>
  setIsUpdateEmployeeModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const EmployeesList: React.FC<EmployeesListProps> = ({
  isAdmin,
  isFetching,
  employeeList,
  searchedEmployee,
  setIsDeleteModalOpen,
  setChosenEmployee,
  setIsUpdateEmployeeModalOpen
}) => {
  const columns: ColumnsType<Employee> = useColumns(searchedEmployee)
  const navigate = useNavigate()
  const location = useLocation()

  const [expandedRowKeys, setExpandedRowKeys] = useState<string[]>([])

  const handleDeleteButtonClick = (record: Employee) => {
    setIsDeleteModalOpen(true)
    setChosenEmployee(record)
    setExpandedRowKeys([])
  }

  const handleUpdateButtonClick = (record: Employee) => {
    setIsUpdateEmployeeModalOpen(true)
    setChosenEmployee(record)
    setExpandedRowKeys([])
  }

  const handleExpand = (expanded: boolean, record: Employee) => {
    setChosenEmployee(record)
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
