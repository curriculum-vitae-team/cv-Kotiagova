import '@/App.css'
import EmployeesPage from '@/pages/EmployeesPage/EmployeesPage'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LayoutWrapper from './components/LayoutWrapper/LayoutWrapper'
import LoginPage from './pages/LoginPage/LoginPage'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route
            path='/employees'
            element={
              <LayoutWrapper>
                <EmployeesPage />
              </LayoutWrapper>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
