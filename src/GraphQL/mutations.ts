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
      email
      profile {
        first_name
        last_name
        avatar
        skills {
          skill_name
          mastery
        }
        languages {
          language_name
          proficiency
        }
      }
      cvs {
        id
        name
        description
      }
      position {
        id
        name
      }
      department {
        id
        name
      }
    }
  }
`

export const ADD_EMPLOYEE = gql`
  mutation ADD_EMPLOYEE($user: CreateUserInput!) {
    createUser(user: $user) {
      id
      email
      profile {
        id
        first_name
        last_name
      }
      department {
        id
        name
      }
      position {
        id
        name
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
