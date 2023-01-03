// import { bindActionCreators } from 'redux'

import { useLazyQuery } from '@apollo/client'

import { EMPLOYEE_QUERY } from '@/GraphQL/queries'
// import { actionCreators, useAppDispatch } from '@/state'
import { useState } from 'react'

const useGetEmployee = () => {
  const [isFetching, setIsFetching] = useState(false)
  const [getEmployeeQuery] = useLazyQuery(EMPLOYEE_QUERY)

  const getEmployee = (
    id: string,
    setEmployee: React.Dispatch<React.SetStateAction<ProfilePageUser>>
  ) => {
    setIsFetching(true)
    getEmployeeQuery({
      variables: {
        id: id
      }
    })
      .then(({ data: { user } }) => {
        setEmployee(user)
      })
      .catch(console.error)
      .finally(() => {
        setIsFetching(false)
      })
  }

  return { getEmployee, isFetching }
}

export default useGetEmployee
