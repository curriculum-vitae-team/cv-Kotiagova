import { ActionType } from '../action-types'
import { Action } from './../actions/index'

const initialState: Employee = {
  email: '',
  id: '',
  profile: {
    id: '',
    first_name: '',
    last_name: '',
    skills: [],
    languages: []
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

const reducer = (employee: Employee = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_SELECTED_EMPLOYEE:
      return action.payload
    default:
      return employee
  }
}

export default reducer
