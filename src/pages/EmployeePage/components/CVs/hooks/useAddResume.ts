import { useState } from 'react'

import { useAppSelector } from '@/state'

import { ADD_RESUME } from '@/GraphQL/mutations'
import { useMutation } from '@apollo/client'

import useBindResume from './useBindResume'

import {
  NewResumeFormValues,
  ResumeFormLanguage,
  ResumeFormSkill
} from '@/components/NewResumeModal/types'

const useAddResume = () => {
  const [isFetching, setIsFetching] = useState(false)
  const [addResumeMutation] = useMutation(ADD_RESUME)
  const { bindResume } = useBindResume()

  const { selectedEmployee } = useAppSelector((state) => state)

  const addResume = (data: NewResumeFormValues, toggleModalOpen: () => void) => {
    let languages: ResumeFormLanguage[] = [],
      skills: ResumeFormSkill[] = []

    setIsFetching(true)

    if (data?.languages?.[0].language !== undefined) {
      languages = data.languages?.map(({ language }) => ({
        language_name: language?.[0],
        proficiency: language?.[1]
      }))
    }

    if (data?.skills?.[0].skill !== undefined) {
      skills =
        data.skills?.map(({ skill }) => ({
          skill_name: skill?.[0],
          mastery: skill?.[1]
        })) ?? []
    }

    addResumeMutation({
      variables: {
        cv: {
          ...data,
          languages,
          skills,
          projectsIds: data.projectsIds?.map((i: string) => +i) ?? [],
          is_template: !!data.is_template
        }
      }
    })
      .then(({ data }) => {
        const cv: CV = data.createCv
        bindResume(cv, selectedEmployee.id)
      })
      .catch(console.error)
      .finally(() => {
        toggleModalOpen()
        setIsFetching(false)
      })
  }

  return { addResume, isFetching }
}

export default useAddResume
