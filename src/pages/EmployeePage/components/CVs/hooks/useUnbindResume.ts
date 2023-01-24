import { useState } from 'react'

import { setCVs } from '@/features/selectedEmployee/selectedEmployeeSlice'
import { UNBIND_RESUME } from '@/GraphQL/mutations'
import { useAppDispatch, useAppSelector } from '@/state'
import { useMutation } from '@apollo/client'

const useUnbindResume = () => {
  const [isFetching, setIsFetching] = useState(false)
  const [unbindMutation] = useMutation(UNBIND_RESUME)

  const { selectedEmployee } = useAppSelector((state) => state)
  const dispatch = useAppDispatch()

  const unbindResume = (id: string) => {
    setIsFetching(true)
    unbindMutation({ variables: { id: id } })
      .then(({ data }) => {
        const cvId: string = data.unbindCv.id
        dispatch(setCVs(selectedEmployee.cvs.filter((cv) => cv.id !== cvId)))
      })
      .catch(console.error)
      .finally(() => setIsFetching(false))
  }

  return { unbindResume, isFetching }
}

export default useUnbindResume
