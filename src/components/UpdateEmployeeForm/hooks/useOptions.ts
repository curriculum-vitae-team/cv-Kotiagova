import { useEffect, useState } from 'react'

import { GET_DEPARTMENTS_AND_POSITIONS } from '@/GraphQL/queries'
import { useLazyQuery } from '@apollo/client'

export const useOptions: () => {
  departments: Department[] | undefined
  positions: Position[] | undefined
} = () => {
  const [options, setOptions] = useState<{
    departments: Department[]
    positions: Position[]
  }>()
  const [optionsQuery] = useLazyQuery(GET_DEPARTMENTS_AND_POSITIONS)

  useEffect(() => {
    optionsQuery().then((res) => setOptions(res.data))
  }, [])

  return { departments: options?.departments, positions: options?.positions }
}
