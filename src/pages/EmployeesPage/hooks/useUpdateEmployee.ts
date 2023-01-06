import { useState } from 'react'

import { useMutation } from '@apollo/client'

import { UPDATE_EMPLOYEE } from '@/GraphQL/mutations'
import { useAppSelector } from '@/state'

const useUpdateEmployee = () => {
  const [updateEmployeeMutation] = useMutation(UPDATE_EMPLOYEE)
  const [isFetching, setIsFetching] = useState(false)

  const selectedEmployee = useAppSelector((state) => state.selectedEmployee)

  const updateEmployee = (updateFormValues, id: string, onSuccess: (updateUser) => void) => {
    setIsFetching(true)
    updateEmployeeMutation({
      variables: {
        id: id,
        user: {
          departmentId: updateFormValues.departmentId ?? '',
          positionId: updateFormValues.positionId ?? '',
          cvsIds: selectedEmployee.cvs,
          profile: {
            first_name: updateFormValues.first_name,
            last_name: updateFormValues.last_name,
            skills: selectedEmployee.profile.skills,
            languages: selectedEmployee.profile.languages
          }
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
