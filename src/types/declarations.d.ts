declare module '*.css' {
  const css: { [key: string]: string }
  export default css
}

declare global {
  interface EmployeesPageUser {
    id: string
    email: string
    profile: {
      id: string
      first_name: string
      last_name: string
    }
    department: {
      id: string
      name: string
    } | null
    position: {
      id: string
      name: string
    } | null
  }
}

export {}
