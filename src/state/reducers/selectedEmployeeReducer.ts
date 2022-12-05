import { ActionType } from '../action-types'
import { Action } from './../actions/index'

const initialState = {
  email: '',
  id: '',
  access_token: '',
  is_verified: false,
  profile: {
    id: '',
    first_name: '',
    last_name: ''
  },
  department: {
    id: '',
    name: ''
  },
  position: {
    id: '',
    name: ''
  }
}

const reducer = (employee: EmployeesPageUser = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_SELECTED_EMPLOYEE:
      return action.payload
    default:
      return employee
  }
}

export default reducer
