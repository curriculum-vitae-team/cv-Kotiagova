import { Dispatch } from 'redux'
import { ActionType } from './../action-types/index'
import { Action, UserState } from './../actions/index'

export const setUser = (user: UserState) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_USER,
      payload: user
    })
  }
}

export const removeUser = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.REMOVE_USER
    })
  }
}
