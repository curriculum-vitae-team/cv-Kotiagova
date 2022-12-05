import { useEffect } from 'react'

import { EMPLOYEES_QUERY } from '@/GraphQL/queries'
import { useLazyQuery } from '@apollo/client'

const useFetchEmployees: (
  setIsFetching: React.Dispatch<React.SetStateAction<boolean>>,
  setEmployeeList: React.Dispatch<React.SetStateAction<EmployeesPageUser[]>>
) => [() => void] = (setIsFetching, setEmployeeList) => {
  const [employees] = useLazyQuery(EMPLOYEES_QUERY)

  const fetchEmployees = () => {
    setIsFetching(true)
    employees()
      .then((res) => {
        setEmployeeList(res.data.users)
      })
      .catch(console.error)
      .finally(() => setIsFetching(false))
  }

  useEffect(() => {
    fetchEmployees()
  }, [])

  return [fetchEmployees]
}

export default useFetchEmployees
