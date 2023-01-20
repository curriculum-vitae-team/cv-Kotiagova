import { useState } from 'react'

import { EMPLOYEES_QUERY } from '@/GraphQL/queries'
import { useLazyQuery } from '@apollo/client'

import { setEmployees } from '@/features/employees/employeesSlice'
import { useAppDispatch } from '@/state'

const useGetEmployees = () => {
  const [employees] = useLazyQuery(EMPLOYEES_QUERY)
  const dispatch = useAppDispatch()
  const [isFetching, setIsFetching] = useState(false)

  const getEmployees = () => {
    setIsFetching(true)
    employees()
      .then(({ data }) => {
        const users: Employee[] = data.users
        dispatch(setEmployees(users))
      })
      .catch(console.error)
      .finally(() => setIsFetching(false))
  }

  return { getEmployees, isFetching }
}

export { useGetEmployees }
