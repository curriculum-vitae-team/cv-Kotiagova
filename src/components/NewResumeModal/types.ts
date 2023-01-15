export interface NewResumeFormValues {
  languages: {
    language: [string, string]
  }[]
  skills: {
    skill: [string, string]
  }[]
  projectsIds: string[]
  is_template: boolean
}

export interface ResumeFormLanguage {
  language_name: string
  proficiency: string
}

export interface ResumeFormSkill {
  skill_name: string
  mastery: string
}
