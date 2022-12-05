import { bindActionCreators } from 'redux'

import { actionCreators, useAppDispatch, useAppSelector } from '@/state'

import { DELETE_EMPLOYEE } from '@/GraphQL/mutations'
import { useMutation } from '@apollo/client'

const useDeleteEmployee = () => {
  const [deleteEmployeeMutation] = useMutation(DELETE_EMPLOYEE)
  const dispatch = useAppDispatch()

  const { employees, selectedEmployee } = useAppSelector((state) => state)

  const { setEmployeeList, setIsLoading } = bindActionCreators(actionCreators, dispatch)

  const deleteEmployee = () => {
    deleteEmployeeMutation({
      variables: { id: selectedEmployee.id }
    })
      .then(() => {
        setEmployeeList(employees.filter((employee) => employee.id !== selectedEmployee.id))
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false)
      })
  }

  return deleteEmployee
}

export default useDeleteEmployee
