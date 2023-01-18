import { useEffect, useState } from 'react'

import { GET_LANGUAGES_AND_SKILLS_AND_PROJECTS } from '@/GraphQL/queries'
import { useLazyQuery } from '@apollo/client'

export const useOptions = () => {
  const [options, setOptions] = useState<{
    languages: Language[]
    skills: Skill[]
    projects: Project[]
  }>()
  const [optionsQuery] = useLazyQuery(GET_LANGUAGES_AND_SKILLS_AND_PROJECTS)

  useEffect(() => {
    optionsQuery().then((res) => setOptions(res.data))
  }, [])

  return { languages: options?.languages, skills: options?.skills, projects: options?.projects }
}
