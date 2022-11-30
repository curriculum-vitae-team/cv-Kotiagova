import { gql, useLazyQuery } from '@apollo/client'

const EMPLOYEES_QUERY = gql`
  query GET_EMPLOYEES {
    users {
      id
      email
      department {
        id
        name
        created_at
      }
      position {
        id
        name
        created_at
      }
      profile {
        first_name
        last_name
      }
    }
  }
`

export const useEmployees = () => {
  return useLazyQuery(EMPLOYEES_QUERY)[0]
}
