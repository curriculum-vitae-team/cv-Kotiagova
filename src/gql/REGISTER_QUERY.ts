import { gql } from '@apollo/client'

export const REGISTER_QUERY = gql`
  mutation LOGIN($auth: AuthInput!) {
    signup(auth: $auth) {
      user {
        id
        email
      }
      access_token
    }
  }
`
