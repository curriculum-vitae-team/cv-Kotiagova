import { configureStore } from '@reduxjs/toolkit'

import { employeesReducer, selectedEmployeeReducer, userReducer } from '@/features'

export const store = configureStore({
  reducer: {
    selectedEmployee: selectedEmployeeReducer,
    employees: employeesReducer,
    user: userReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {user: UserState}
export type AppDispatch = typeof store.dispatch
