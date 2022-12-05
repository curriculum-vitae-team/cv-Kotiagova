import { combineReducers } from 'redux'

import employeesReducer from './employeesReducer'
import isLoadingReducer from './isLoadingReducer'
import selectedEmployeeReducer from './selectedEmployeeReducer'
import userReducer from './userReducer'

const reducers = combineReducers({
  user: userReducer,
  employees: employeesReducer,
  isLoading: isLoadingReducer,
  selectedEmployee: selectedEmployeeReducer
})

export default reducers

export type State = ReturnType<typeof reducers>
