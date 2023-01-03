import { ActionType } from './../action-types/index'

interface SetUserAction {
  type: ActionType.SET_USER
  payload: UserState
}

interface SetEmployeeList {
  type: ActionType.SET_EMPLOYEE_LIST
  payload: EmployeesPageUser[]
}

interface SetSelectedEmployee {
  type: ActionType.SET_SELECTED_EMPLOYEE
  payload: EmployeesPageUser
}

export type Action = SetUserAction | SetEmployeeList | SetSelectedEmployee

export type UserState = {
  email: string
  id: string
  access_token: string
  is_verified: boolean
}
