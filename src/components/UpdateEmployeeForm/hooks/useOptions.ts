import { useEffect, useState } from 'react'

import { GET_DEPARTMENTS_AND_POSITIONS } from '@/GraphQL/queries'
import { useLazyQuery } from '@apollo/client'

export const useOptions = () => {
  const [options, setOptions] = useState<{
    departments: Department[]
    positions: Position[]
  }>()
  const [isFetching, setIsFetching] = useState(false)
  const [optionsQuery] = useLazyQuery(GET_DEPARTMENTS_AND_POSITIONS)

  useEffect(() => {
    setIsFetching(true)
    optionsQuery()
      .then((res) => setOptions(res.data))
      .catch(console.error)
      .finally(() => setIsFetching(false))
  }, [])

  return { departments: options?.departments, positions: options?.positions, isFetching }
}
