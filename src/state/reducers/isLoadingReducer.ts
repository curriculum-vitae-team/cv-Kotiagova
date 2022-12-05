import { ActionType } from '../action-types'
import { Action } from './../actions/index'

const initialState = false

const reducer = (isLoading: boolean = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_IS_LOADING:
      return action.payload
    default:
      return isLoading
  }
}

export default reducer
