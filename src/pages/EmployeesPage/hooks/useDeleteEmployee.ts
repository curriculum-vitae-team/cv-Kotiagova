import { DELETE_EMPLOYEE } from '@/GraphQL/mutations'
import { useMutation } from '@apollo/client'

const useDeleteEmployee = () => {
  const [deleteEmployeeMutation] = useMutation(DELETE_EMPLOYEE)

  const deleteEmployee = (
    selectedEmployee: EmployeesPageUser,
    setEmployeeList: React.Dispatch<React.SetStateAction<EmployeesPageUser[]>>,
    setIsFetching: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    deleteEmployeeMutation({
      variables: { id: selectedEmployee.id }
    })
      .then(() => {
        setEmployeeList((prevEmployeeList) =>
          prevEmployeeList.filter((employee) => employee.id !== selectedEmployee.id)
        )
      })
      .catch(console.error)
      .finally(() => {
        setIsFetching(false)
      })
  }

  return deleteEmployee
}

export default useDeleteEmployee
