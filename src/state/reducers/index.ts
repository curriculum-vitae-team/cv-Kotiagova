import { combineReducers } from 'redux'

import employeesReducer from './employeesReducer'
import selectedEmployeeReducer from './selectedEmployeeReducer'
import userReducer from './userReducer'

const reducers = combineReducers({
  user: userReducer,
  employees: employeesReducer,
  selectedEmployee: selectedEmployeeReducer
})

export default reducers

export type State = ReturnType<typeof reducers>
