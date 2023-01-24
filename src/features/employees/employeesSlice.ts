import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: Employee[] = []

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    setEmployees: (state, { payload }: PayloadAction<Employee[]>) => {
      return payload
    }
  }
})

export const { setEmployees } = employeesSlice.actions

export default employeesSlice.reducer
