import { ADD_EMPLOYEE } from '@/GraphQL/mutations'
import { useMutation } from '@apollo/client'

const useAddEmployee = () => {
  const [addEmployeeMutation] = useMutation(ADD_EMPLOYEE)

  const addEmployee = (
    addFormValues,
    setEmployeeList: React.Dispatch<React.SetStateAction<EmployeesPageUser[]>>,
    setIsFetching: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    addEmployeeMutation({
      variables: {
        user: {
          auth: {
            email: addFormValues.email,
            password: addFormValues.password
          },
          profile: {
            first_name: addFormValues.first_name ?? '',
            last_name: addFormValues.last_name ?? '',
            skills: [],
            languages: []
          },
          cvsIds: [],
          role: 'employee',
          departmentId: '1',
          positionId: '1'
        }
      }
    })
      .then(({ data: { createUser } }) => {
        setEmployeeList((prevEmployeeList) => prevEmployeeList.concat(createUser))
      })
      .catch(console.error)
      .finally(() => {
        setIsFetching(false)
      })
  }

  return addEmployee
}

export default useAddEmployee
