import { useState } from 'react'

import { useAppDispatch, useAppSelector } from '@/state'

import { setEmployees } from '@/features/employees/employeesSlice'
import { DELETE_EMPLOYEE } from '@/GraphQL/mutations'
import { useMutation } from '@apollo/client'

const useDeleteEmployee = () => {
  const [deleteEmployeeMutation] = useMutation(DELETE_EMPLOYEE)
  const dispatch = useAppDispatch()
  const [isFetching, setIsFetching] = useState(false)

  const { employees, selectedEmployee } = useAppSelector((state) => state)

  const deleteEmployee = () => {
    setIsFetching(true)
    deleteEmployeeMutation({
      variables: { id: selectedEmployee.id }
    })
      .then(() => {
        dispatch(setEmployees(employees.filter((employee) => employee.id !== selectedEmployee.id)))
      })
      .catch(console.error)
      .finally(() => {
        setIsFetching(false)
      })
  }

  return { deleteEmployee, isFetching }
}

export { useDeleteEmployee }
