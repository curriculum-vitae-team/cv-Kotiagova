import { gql, useMutation } from '@apollo/client'

const DELETE_EMPLOYEE = gql`
  mutation DELETE_EMPLOYEE($id: ID!) {
    deleteUser(id: $id) {
      affected
    }
  }
`

export const useDeleteEmployee = () => {
  return useMutation(DELETE_EMPLOYEE)[0]
}
