import { useState } from 'react'

import { UNBIND_RESUME } from '@/GraphQL/mutations'
import { actionCreators, useAppDispatch, useAppSelector } from '@/state'
import { useMutation } from '@apollo/client'
import { bindActionCreators } from 'redux'

const useUnbindResume = () => {
  const [isFetching, setIsFetching] = useState(false)
  const [unbindMutation] = useMutation(UNBIND_RESUME)

  const { selectedEmployee } = useAppSelector((state) => state)
  const dispatch = useAppDispatch()
  const { setSelectedEmployee } = bindActionCreators(actionCreators, dispatch)

  const unbindResume = (id: string) => {
    setIsFetching(true)
    unbindMutation({ variables: { id: id } })
      .then(({ data }) => {
        const cvId: string = data.unbindCv.id
        setSelectedEmployee({
          ...selectedEmployee,
          cvs: selectedEmployee.cvs.filter((cv) => cv.id !== cvId)
        })
      })
      .catch(console.error)
      .finally(() => setIsFetching(false))
  }

  return { unbindResume, isFetching }
}

export default useUnbindResume
