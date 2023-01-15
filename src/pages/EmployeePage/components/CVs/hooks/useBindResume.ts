import { useState } from 'react'

import { actionCreators, useAppDispatch, useAppSelector } from '@/state'
import { bindActionCreators } from 'redux'

import { BIND_RESUME } from '@/GraphQL/mutations'
import { useMutation } from '@apollo/client'

const useBindResume = () => {
  const [isFetching, setIsFetching] = useState(false)
  const [bindMutation] = useMutation(BIND_RESUME)
  const { selectedEmployee } = useAppSelector((state) => state)
  const dispatch = useAppDispatch()
  const { setSelectedEmployee } = bindActionCreators(actionCreators, dispatch)

  const bindResume = (CVInput: CV, userId: string) => {
    const { id, projects, ...rest } = CVInput

    setIsFetching(true)
    bindMutation({
      variables: {
        id: id,
        cv: {
          ...rest,
          userId,
          projectsIds: projects.map((p) => p.id)
        }
      }
    })
      .then(({ data }) => {
        const updateCv: CV = data.updateCv
        if (!selectedEmployee.cvs.some((cv) => cv.id == updateCv.id))
          setSelectedEmployee({
            ...selectedEmployee,
            cvs: selectedEmployee.cvs.concat(updateCv)
          })
      })
      .catch(console.error)
      .finally(() => {
        setIsFetching(false)
      })
  }

  return { bindResume, isFetching }
}

export default useBindResume
