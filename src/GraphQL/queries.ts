import { gql } from '@apollo/client'

export const LOGIN_QUERY = gql`
  query LOGIN($auth: AuthInput!) {
    login(auth: $auth) {
      user {
        id
        email
        is_verified
      }
      access_token
    }
  }
`

export const EMPLOYEES_QUERY = gql`
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
