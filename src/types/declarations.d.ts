declare module '*.css' {
  const css: { [key: string]: string }
  export default css
}

declare global {
  type Employee = {
    department: {
      id: string
      name: string
      created_at: string
    } | null
    position: {
      id: string
      name: string
      created_at: string
    } | null
    id: string
    created_at: string
    email: string
    password: string
    is_verified: boolean
    profile: {
      id: string
      first_name: string
      last_name: string
    }
    skills: [
      {
        skill_name: string
        mastery: string
      }
    ]
    languages: [
      {
        language_name: string
        proficiency: string
      }
    ]
    role: string
  }
}

export {}
