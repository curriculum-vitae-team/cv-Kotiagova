declare module '*.css' {
  const css: { [key: string]: string }
  export default css
}

declare global {
  interface Department {
    id: string
    name: string
  }

  interface Project {
    id: string
    created_at?: string
    name: string
    internal_name: string
    description: string
    domain: string
    start_date: string
    end_date?: string
    team_size: number
    tech_stack?: Skill[]
  }

  interface Position {
    id: string
    name: string
  }

  interface CV {
    id: string
    name: string
    description: string
    created_at?: string
    user?: Employee
    projects?: Project[]
    skills: Skill[]
    languages: Language[]
    is_template: boolean
  }

  interface Language {
    id?: string
    language_name: string
    name?: string
    proficiency: string
  }

  interface Skill {
    id?: string
    skill_name: string
    name?: string
    mastery: string
  }

  interface Employee {
    id: string
    email?: string
    profile: {
      id: string
      first_name: string | null
      last_name: string | null
      avatar?: string
      skills?: Skill[]
      languages?: Language[]
    }
    cvs?: CV[]
    department: Department
    position: Position
  }
}

export {}
