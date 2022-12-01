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

export const UPDATE_EMPLOYEE = gql`
  mutation UPDATE_EMPLOYEE($id: ID!, $user: UpdateUserInput!) {
    updateUser(id: $id, user: $user) {
      profile {
        first_name
      }
    }
  }
`

export const ADD_EMPLOYEE = gql`
  mutation ADD_EMPLOYEE($user: CreateUserInput!) {
    createUser(user: $user) {
      profile {
        first_name
      }
    }
  }
`

export const DELETE_EMPLOYEE = gql`
  mutation DELETE_EMPLOYEE($id: ID!) {
    deleteUser(id: $id) {
      affected
    }
  }
`
