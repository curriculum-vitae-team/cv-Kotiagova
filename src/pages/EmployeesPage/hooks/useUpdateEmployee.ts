import { UPDATE_EMPLOYEE } from '@/GraphQL/mutations'
import { useMutation } from '@apollo/client'

const useUpdateEmployee = () => {
  const [updateEmployeeMutation] = useMutation(UPDATE_EMPLOYEE)

  const updateEmployee = (
    updateFormValues,
    selectedEmployee: EmployeesPageUser,
    setEmployeeList: React.Dispatch<React.SetStateAction<EmployeesPageUser[]>>,
    setIsFetching: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    updateEmployeeMutation({
      variables: {
        id: selectedEmployee.id,
        user: updateFormValues
      }
    })
      .then(({ data: { updateUser } }) => {
        setEmployeeList((prevEmployeeList) =>
          prevEmployeeList.map((employee) => {
            if (employee.id === updateUser.id) {
              return updateUser
            }
            return employee
          })
        )
      })
      .catch(console.error)
      .finally(() => {
        setIsFetching(false)
      })
  }

  return updateEmployee
}

export default useUpdateEmployee
