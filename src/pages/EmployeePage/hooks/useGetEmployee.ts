import { bindActionCreators } from 'redux'

import { useLazyQuery } from '@apollo/client'

import { EMPLOYEE_QUERY } from '@/GraphQL/queries'
import { actionCreators, useAppDispatch } from '@/state'

const useGetEmployee = () => {
  const [getEmployeeQuery] = useLazyQuery(EMPLOYEE_QUERY)
  const dispatch = useAppDispatch()

  const { setIsLoading } = bindActionCreators(actionCreators, dispatch)

  const getEmployee = (
    id: string,
    setEmployee: React.Dispatch<React.SetStateAction<ProfilePageUser>>
  ) => {
    setIsLoading(true)
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
