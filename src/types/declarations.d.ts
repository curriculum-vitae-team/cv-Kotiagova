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

  interface EmployeePageUser {
    email: string
    profile: {
      id: string
      first_name: string | null
      last_name: string | null
      avatar: string | null
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
    }
    cvs: [
      {
        id: string
        name: string
        description: string
      }
    ]
    department: Department
    position: Position
  }
}

export {}
