import { useState } from 'react'
import { bindActionCreators } from 'redux'

import { actionCreators, useAppDispatch, useAppSelector } from '@/state'

import { DELETE_EMPLOYEE } from '@/GraphQL/mutations'
import { useMutation } from '@apollo/client'

const useDeleteEmployee = () => {
  const [deleteEmployeeMutation] = useMutation(DELETE_EMPLOYEE)
  const dispatch = useAppDispatch()
  const [isFetching, setIsFetching] = useState(false)

  const { employees, selectedEmployee } = useAppSelector((state) => state)

  const { setEmployeeList } = bindActionCreators(actionCreators, dispatch)

  const deleteEmployee = () => {
    setIsFetching(true)
    deleteEmployeeMutation({
      variables: { id: selectedEmployee.id }
    })
      .then(() => {
        setEmployeeList(employees.filter((employee) => employee.id !== selectedEmployee.id))
      })
      .catch(console.error)
      .finally(() => {
        setIsFetching(false)
      })
  }

  return { deleteEmployee, isFetching }
}

export default useDeleteEmployee
