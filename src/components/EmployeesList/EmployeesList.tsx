import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { Button, Table } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import { ExpandableConfig } from 'antd/lib/table/interface'

import { actionCreators, useAppDispatch, useAppSelector } from '@/state'
import { useColumns } from './hooks/useColumns'

import { bindActionCreators } from 'redux'
import { ExpandedRow, UpdateButton } from './EmployeesList.style'

type EmployeesListProps = {
  isFetching: boolean
  searchedEmployee: string
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  setIsUpdateEmployeeModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const EmployeesList: React.FC<EmployeesListProps> = ({
  isFetching,
  searchedEmployee,
  setIsDeleteModalOpen,
  setIsUpdateEmployeeModalOpen
}) => {
  const columns: ColumnsType<Employee> = useColumns(searchedEmployee)
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useAppDispatch()

  const { setSelectedEmployee } = bindActionCreators(actionCreators, dispatch)

  const {
    employees,
    user: { is_verified }
  } = useAppSelector((state) => state)

  const [expandedRowKeys, setExpandedRowKeys] = useState<string[]>([])

  const handleDeleteButtonClick = (record: Employee) => {
    setIsDeleteModalOpen(true)
    setSelectedEmployee(record)
    setExpandedRowKeys([])
  }

  const handleUpdateButtonClick = (record: Employee) => {
    setIsUpdateEmployeeModalOpen(true)
    setSelectedEmployee(record)
    setExpandedRowKeys([])
  }

  const handleExpand = (_expanded: boolean, record: Employee) => {
    setSelectedEmployee(record)
    setExpandedRowKeys((prevRowKeys) => (prevRowKeys[0] === record.id ? [] : [record.id]))
  }

  const expandableConfig: ExpandableConfig<Employee> = {
    expandRowByClick: true,
    expandedRowRender: (record: Employee) => {
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
      dataSource={[...employees]}
      columns={columns}
      bordered
      loading={isFetching}
      rowKey='id'
      scroll={{ y: 400 }}
    />
  )
}

export default EmployeesList
