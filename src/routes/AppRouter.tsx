import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import LayoutWrapper from '@/components/LayoutWrapper/LayoutWrapper'
import AuthPage from '@/pages/AuthPage/AuthPage'
import EmployeePage from '@/pages/EmployeePage/EmployeePage'
import EmployeesPage from '@/pages/EmployeesPage/EmployeesPage'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='auth' element={<AuthPage />} />
      <Route
        path='employees'
        element={
          <LayoutWrapper>
            <EmployeesPage />
          </LayoutWrapper>
        }
      />
      <Route
        path='employees/:id'
        element={
          <LayoutWrapper>
            <EmployeePage />
          </LayoutWrapper>
        }
      />
      <Route path='dashboard' element={<LayoutWrapper>{'dashboard'}</LayoutWrapper>} />
      <Route path='projects' element={<LayoutWrapper>{'projects'}</LayoutWrapper>} />
      <Route path='*' element={<Navigate to='auth' />} />
    </Routes>
  )
}

export default AppRouter
