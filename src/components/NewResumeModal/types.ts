export interface NewResumeFormValues {
  languages: FormLanguage[]
  skills: FormSkill[]
  projectsIds: string[]
  is_template: boolean
}

interface FormLanguage {
  language: [string, string]
}

interface FormSkill {
  skill: [string, string]
}

export interface ResumeFormLanguage {
  language_name: string
  proficiency: string
}

export interface ResumeFormSkill {
  skill_name: string
  mastery: string
}
