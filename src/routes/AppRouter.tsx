import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '@/pages/LoginPage/LoginPage'
import EmployeesPage from '@/pages/EmployeesPage/EmployeesPage'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='' element={<LoginPage />} />
      <Route path='/employees' element={<EmployeesPage />} />

      <Route path='/*' element={<LoginPage />} />
    </Routes>
  )
}

export default AppRouter
