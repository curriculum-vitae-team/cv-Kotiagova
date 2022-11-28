import { gql } from '@apollo/client'

export const EMPLOYEES_QUERY = gql`
  query GET_EMPLOYEES {
    users {
      id
      email
      department_name
      position_name
      profile {
        first_name
        last_name
      }
    }
  }
`
