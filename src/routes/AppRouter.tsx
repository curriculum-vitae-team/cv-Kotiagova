import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '@/pages/LoginPage/LoginPage'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='' element={<LoginPage />} />

      <Route path='/*' element={<LoginPage />} />
    </Routes>
  )
}

export default AppRouter
