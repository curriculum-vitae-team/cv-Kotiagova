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
