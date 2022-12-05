import { ActionType } from '../action-types'
import { Action, UserState } from './../actions/index'

const initialState = {
  email: '',
  id: '',
  access_token: '',
  is_verified: false
}

const reducer = (user: UserState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_USER:
      return {
        email: action.payload.email,
        id: action.payload.id,
        access_token: action.payload.access_token,
        is_verified: action.payload.is_verified
      }
    default:
      return user
  }
}

export default reducer
