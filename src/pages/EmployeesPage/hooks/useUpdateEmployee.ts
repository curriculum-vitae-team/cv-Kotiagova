import { bindActionCreators } from 'redux'

import { UPDATE_EMPLOYEE } from '@/GraphQL/mutations'
import { actionCreators, useAppDispatch } from '@/state'
import { useMutation } from '@apollo/client'

const useUpdateEmployee = () => {
  const [updateEmployeeMutation] = useMutation(UPDATE_EMPLOYEE)
  const dispatch = useAppDispatch()

  const { setIsLoading } = bindActionCreators(actionCreators, dispatch)

  const updateEmployee = (updateFormValues, id: string, onSuccess: (updateUser) => void) => {
    setIsLoading(true)
    updateEmployeeMutation({
      variables: {
        id: id,
        user: {
          departmentId: updateFormValues.departmentId ?? '',
          positionId: updateFormValues.positionId ?? '',
          profile: {
            first_name: updateFormValues.first_name,
            last_name: updateFormValues.last_name,
            skills: [],
            languages: []
          },
          cvsIds: []
        }
      }
    })
      .then(({ data: { updateUser } }) => {
        onSuccess(updateUser)
      })
      .catch(console.error)
      .finally(() => {
        setIsLoading(false)
      })
  }

  return updateEmployee
}

export default useUpdateEmployee
