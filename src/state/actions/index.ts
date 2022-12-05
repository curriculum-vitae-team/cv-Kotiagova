import { ActionType } from './../action-types/index'

interface SetUserAction {
  type: ActionType.SET_USER
  payload: UserState
}

interface RemoveUserAction {
  type: ActionType.REMOVE_USER
}

export type Action = SetUserAction | RemoveUserAction

export type UserState = {
  email: string
  id: string
  access_token: string
  is_verified: boolean
}
