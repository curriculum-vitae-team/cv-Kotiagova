import { gql, useMutation } from '@apollo/client'

const ADD_EMPLOYEE = gql`
  mutation ADD_EMPLOYEE($user: CreateUserInput!) {
    createUser(user: $user) {
      profile {
        first_name
      }
    }
  }
`

export const useAddEmployee = () => {
  return useMutation(ADD_EMPLOYEE)[0]
}
