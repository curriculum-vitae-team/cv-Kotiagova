import { gql, useMutation } from '@apollo/client'

const UPDATE_EMPLOYEE = gql`
  mutation UPDATE_EMPLOYEE($id: ID!, $user: UpdateUserInput!) {
    updateUser(id: $id, user: $user) {
      profile {
        first_name
      }
    }
  }
`

export const useUpdateEmployee = () => {
  return useMutation(UPDATE_EMPLOYEE)[0]
}
