import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { Table } from 'antd'
import { ExpandableConfig } from 'antd/lib/table/interface'

import { useAppDispatch, useAppSelector } from '@/state'
import { useColumns } from './hooks/useColumns'

import { setSelectedEmployee } from '@/features/selectedEmployee/selectedEmployeeSlice'
import { PrimaryButton } from '@/UI/buttons'
import { ExpandedRow, StyledLinkButton, UpdateButton } from './EmployeesList.style'

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
  const columns = useColumns(searchedEmployee)
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useAppDispatch()

  const {
    employees,
    user: { is_verified }
  } = useAppSelector((state) => state)

  const [expandedRowKeys, setExpandedRowKeys] = useState<string[]>([])

  const handleDeleteButtonClick = (record: Employee) => {
    setIsDeleteModalOpen(true)
    dispatch(setSelectedEmployee(record))
    setExpandedRowKeys([])
  }

  const handleUpdateButtonClick = () => {
    setIsUpdateEmployeeModalOpen(true)
    setExpandedRowKeys([])
  }

  const handleExpand = (_expanded: boolean, record: Employee) => {
    dispatch(setSelectedEmployee(record))
    setExpandedRowKeys((prevRowKeys) => (prevRowKeys[0] === record.id ? [] : [record.id]))
  }

  const expandableConfig: ExpandableConfig<Employee> = {
    expandRowByClick: true,
    expandedRowRender: (record: Employee) => {
      return (
        <ExpandedRow>
          <StyledLinkButton onClick={() => navigate(`${location.pathname}/${record.id}`)}>
            View Profile
          </StyledLinkButton>
          {is_verified && (
            <>
              <UpdateButton onClick={handleUpdateButtonClick}>Update</UpdateButton>
              <PrimaryButton onClick={() => handleDeleteButtonClick(record)}>Delete</PrimaryButton>
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
