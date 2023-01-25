import React, { useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Tabs } from 'antd'

import { useAppSelector } from '@/state'

import useGetEmployee from './hooks/useGetEmployee'

import { CVs, Languages, Profile, Skills } from './components'

const EmployeePage = () => {
  const { id } = useParams()
  const { getEmployee, isFetching } = useGetEmployee()

  const { user, selectedEmployee } = useAppSelector((state) => state)

  const canEdit = user.is_verified || user.id === id

  useLayoutEffect(() => {
    getEmployee(id)
  }, [])

  const tabItems = [
    {
      label: 'Profile',
      key: 'profile',
      children: (
        <Profile
          canEdit={canEdit}
          isEmployeeFetching={isFetching}
          positionId={selectedEmployee?.position?.id}
          lastName={selectedEmployee?.profile.last_name}
          departmentId={selectedEmployee?.department?.id}
          firstName={selectedEmployee?.profile.first_name}
        />
      )
    },
    {
      label: 'CVs',
      key: 'cvs',
      children: (
        <CVs
          id={selectedEmployee.id}
          canEdit={canEdit}
          isEmployeeFetching={isFetching}
          CVsData={selectedEmployee?.cvs}
        />
      )
    },
    {
      label: 'Languages',
      key: 'languages',
      children: <Languages languagesData={selectedEmployee.profile.languages} />
    },
    {
      label: 'Skills',
      key: 'skills',
      children: <Skills skillsData={selectedEmployee.profile.skills} />
    }
  ]

  return <Tabs items={tabItems} />
}

export default EmployeePage
