declare module '*.css' {
  const css: { [key: string]: string }
  export default css
}

declare global {
  interface Department {
    id: string
    name: string
  }

  interface Position {
    id: string
    name: string
  }

  interface CV {
    id: string
    name: string
    description: string
  }

  interface EmployeesPageUser {
    id: string
    email: string
    profile: {
      id: string
      first_name: string | null
      last_name: string | null
    }
    department: Department | null
    position: Position | null
  }

  interface ProfilePageUser {
    email?: string
    profile: {
      id: string
      first_name: string | null
      last_name: string | null
      avatar?: string
      skills?:
        | [
            {
              skill_name: string
              mastery: string
            }
          ]
        | []
      languages?:
        | [
            {
              language_name: string
              proficiency: string
            }
          ]
        | []
    }
    cvs?: CV[] | []
    department: Department
    position: Position
  }
}

export {}
