import { gql } from '@apollo/client'

export const REGISTER_MUTATION = gql`
  mutation LOGIN($auth: AuthInput!) {
    signup(auth: $auth) {
      user {
        id
        email
        is_verified
      }
      access_token
    }
  }
`
