import { ActionType } from '../action-types'
import { Action } from './../actions/index'

const reducer = (employees: Employee[] = [], action: Action) => {
  switch (action.type) {
    case ActionType.SET_EMPLOYEE_LIST:
      return action.payload

    default:
      return employees
  }
}

export default reducer
