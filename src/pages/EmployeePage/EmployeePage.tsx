import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Tabs } from 'antd'

import { useAppSelector } from '@/state'
import CVs from './components/CVs/CVs'
import Profile from './components/Profile/Profile'

import useGetEmployee from './hooks/useGetEmployee'

import { StyledLoader } from './EmployeePage.style'

const EmployeePage = () => {
  const { id } = useParams()
  const { getEmployee, isFetching } = useGetEmployee()

  const { user, selectedEmployee } = useAppSelector((state) => state)

  const canEdit = user.is_verified || user.id === id

  useEffect(() => {
    getEmployee(id)
  }, [])

  const tabItems = [
    {
      label: 'Profile',
      key: 'profile',
      children: <Profile id={id} employee={selectedEmployee} canEdit={canEdit} />
    },
    {
      label: 'CVs',
      key: 'cvs',
      children: <CVs CVsData={selectedEmployee?.cvs} canEdit={canEdit} />
    }
  ]

  return <>{isFetching ? <StyledLoader tip='Loading...' /> : <Tabs items={tabItems} />}</>
}

export default EmployeePage
