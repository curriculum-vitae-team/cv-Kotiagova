import { ActionType } from '../action-types'
import { Action } from './../actions/index'

const initialState = [
  // {
  //   email: '',
  //   id: '',
  //   profile: {
  //     id: '',
  //     first_name: '',
  //     last_name: ''
  //   },
  //   department: {
  //     id: '',
  //     name: ''
  //   },
  //   position: {
  //     id: '',
  //     name: ''
  //   }
  // }
]

const reducer = (employees: EmployeesPageUser[] = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_EMPLOYEE_LIST:
      return action.payload

    default:
      return employees
  }
}

export default reducer
