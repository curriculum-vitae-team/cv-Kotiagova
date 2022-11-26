import LayoutWrapper from '@/components/LayoutWrapper/LayoutWrapper'
import AuthPage from '@/pages/AuthPage/AuthPage'
import EmployeesPage from '@/pages/EmployeesPage/EmployeesPage'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/auth' element={<AuthPage />} />
      <Route
        path='/employees'
        element={
          <LayoutWrapper>
            <EmployeesPage />
          </LayoutWrapper>
        }
      >
        <Route path=':id' element={<LayoutWrapper>{'hi'}</LayoutWrapper>} />
      </Route>
    </Routes>
  )
}

export default AppRouter
