import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useAppSelector } from '@/state'
import { Tabs } from 'antd'
import CVs from './components/CVs/CVs'
import Profile from './components/Profile/Profile'
import { StyledLoader } from './EmployeePage.style'
import useGetEmployee from './hooks/useGetEmployee'

const EmployeePage = () => {
  const { id } = useParams()
  const [employee, setEmployee] = useState<ProfilePageUser | undefined>()
  const getEmployee = useGetEmployee()

  const { isLoading } = useAppSelector((state) => state)

  useEffect(() => {
    getEmployee(id, setEmployee)
  }, [])

  const tabItems = [
    {
      label: 'Profile',
      key: 'profile',
      children: <Profile id={id} employee={employee} setEmployee={setEmployee} />
    },
    { label: 'CVs', key: 'cvs', children: <CVs CVsData={employee?.cvs} /> }
  ]

  return <>{isLoading ? <StyledLoader tip='Loading...' /> : <Tabs items={tabItems} />}</>
}

export default EmployeePage
