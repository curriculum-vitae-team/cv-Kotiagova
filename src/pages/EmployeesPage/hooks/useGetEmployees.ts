import { useState } from 'react'
import { bindActionCreators } from 'redux'

import { EMPLOYEES_QUERY } from '@/GraphQL/queries'
import { actionCreators, useAppDispatch } from '@/state'
import { useLazyQuery } from '@apollo/client'

const useGetEmployees = () => {
  const [employees] = useLazyQuery(EMPLOYEES_QUERY)
  const dispatch = useAppDispatch()
  const [isFetching, setIsFetching] = useState(false)

  const { setEmployeeList } = bindActionCreators(actionCreators, dispatch)

  const getEmployees = () => {
    setIsFetching(true)
    employees()
      .then((res) => {
        setEmployeeList(res.data.users)
      })
      .catch(console.error)
      .finally(() => setIsFetching(false))
  }

  return { getEmployees, isFetching }
}

export default useGetEmployees
