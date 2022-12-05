import { EMPLOYEE_QUERY } from '@/GraphQL/queries'
import { useLazyQuery } from '@apollo/client'

const useGetEmployee = () => {
  const [getEmployeeQuery] = useLazyQuery(EMPLOYEE_QUERY)

  const getEmployee = (
    id: string,
    setEmployee: React.Dispatch<React.SetStateAction<EmployeePageUser>>,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    getEmployeeQuery({
      variables: {
        id: id
      }
    })
      .then(({ data: { user } }) => {
        setEmployee(user)
      })
      .catch(console.error)
      .finally(() => setIsLoading(false))
  }

  return getEmployee
}

export default useGetEmployee
