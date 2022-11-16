import React from 'react'
import AppButton from '@/components/UI/buttons/AppButton/AppButton'
import { redirect, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { removeUser } from '@/store/slices/userSlice'

const EmployeesPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (
    <div>
      <AppButton
        type={'primary'}
        text={'log out'}
        onClick={() => {
          navigate('/')
          dispatch(removeUser())
        }}
      />
    </div>
  )
}

export default EmployeesPage
