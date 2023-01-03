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

export const setEmployeeList = (employees: EmployeesPageUser[]) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_EMPLOYEE_LIST,
      payload: employees
    })
  }
}

export const setSelectedEmployee = (employee: EmployeesPageUser) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SET_SELECTED_EMPLOYEE,
      payload: employee
    })
  }
}
