import React from 'react'
import { useParams } from 'react-router-dom'

const EmployeePage = () => {
  const { id } = useParams()
  return <div>{id}</div>
}

export default EmployeePage
