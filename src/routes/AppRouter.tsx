import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthPage from '@/pages/AuthPage/AuthPage'
import EmployeesPage from '@/pages/EmployeesPage/EmployeesPage'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='' element={<AuthPage />} />
      <Route path='/employees' element={<EmployeesPage />} />

      <Route path='/*' element={<AuthPage />} />
    </Routes>
  )
}

export default AppRouter
