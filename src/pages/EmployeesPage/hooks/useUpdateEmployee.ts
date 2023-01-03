import { useState } from 'react'

import { UPDATE_EMPLOYEE } from '@/GraphQL/mutations'
import { useMutation } from '@apollo/client'

const useUpdateEmployee = () => {
  const [updateEmployeeMutation] = useMutation(UPDATE_EMPLOYEE)
  const [isFetching, setIsFetching] = useState(false)

  const updateEmployee = (updateFormValues, id: string, onSuccess: (updateUser) => void) => {
    setIsFetching(true)
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
        setIsFetching(false)
      })
  }

  return { updateEmployee, isFetching }
}

export default useUpdateEmployee
