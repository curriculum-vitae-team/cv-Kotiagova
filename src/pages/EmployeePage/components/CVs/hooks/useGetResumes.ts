import { useState } from 'react'

import { GET_RESUMES } from '@/GraphQL/queries'
import { useLazyQuery } from '@apollo/client'

const useGetResumes = () => {
  const [resumes, setResumes] = useState<CV[]>([])
  const [resumesQuery] = useLazyQuery(GET_RESUMES)
  const [isFetching, setIsFetching] = useState(false)

  const getResumes = () => {
    setIsFetching(true)
    resumesQuery()
      .then(({ data }) => {
        const cvs: CV[] = data.cvs
        setResumes(cvs)
      })
      .catch(console.error)
      .finally(() => {
        setIsFetching(false)
      })
  }

  return { getResumes, resumes, isFetching }
}

export default useGetResumes
