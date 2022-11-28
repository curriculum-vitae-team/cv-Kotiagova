import { gql } from '@apollo/client'

export const ADD_EMPLOYEE = gql`
  mutation ADD_EMPLOYEE($user: CreateUserInput!) {
    createUser(user: $user) {
      profile {
        first_name
      }
    }
  }
`
