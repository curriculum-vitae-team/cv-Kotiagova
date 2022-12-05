import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { Button, Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import { ExpandableConfig } from 'antd/lib/table/interface'

import { useAppSelector } from '@/state'
import { useColumns } from './hooks/useColumns'

import { ExpandedRow, UpdateButton } from './EmployeesList.style'

type EmployeesListProps = {
  isFetching: boolean
  searchedEmployee: string
  employeeList: EmployeesPageUser[]
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  setSelectedEmployee: React.Dispatch<React.SetStateAction<EmployeesPageUser>>
  setIsUpdateEmployeeModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const EmployeesList: React.FC<EmployeesListProps> = ({
  isFetching,
  employeeList,
  searchedEmployee,
  setIsDeleteModalOpen,
  setSelectedEmployee,
  setIsUpdateEmployeeModalOpen
}) => {
  const columns: ColumnsType<EmployeesPageUser> = useColumns(searchedEmployee)
  const navigate = useNavigate()
  const location = useLocation()
  const { is_verified } = useAppSelector((state) => state.user)

  const [expandedRowKeys, setExpandedRowKeys] = useState<string[]>([])

  const handleDeleteButtonClick = (record: EmployeesPageUser) => {
    setIsDeleteModalOpen(true)
    setSelectedEmployee(record)
    setExpandedRowKeys([])
  }

  const handleUpdateButtonClick = (record: EmployeesPageUser) => {
    setIsUpdateEmployeeModalOpen(true)
    setSelectedEmployee(record)
    setExpandedRowKeys([])
  }

  const handleExpand = (expanded: boolean, record: EmployeesPageUser) => {
    setSelectedEmployee(record)
    setExpandedRowKeys((prevRowKeys) => {
      if (prevRowKeys[0] === record.id) {
        return []
      }
      return [record.id]
    })
  }

  const expandableConfig: ExpandableConfig<EmployeesPageUser> = {
    expandRowByClick: true,
    expandedRowRender: (record: EmployeesPageUser) => {
      return (
        <ExpandedRow>
          <Button type='link' onClick={() => navigate(`${location.pathname}/${record.id}`)}>
            View Profile
          </Button>
          {is_verified && (
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
      scroll={{ y: 400 }}
    />
  )
}

export default EmployeesList
