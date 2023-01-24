import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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

const selectedEmployeeSlice = createSlice({
  name: 'selectedEmployee',
  initialState,
  reducers: {
    setSelectedEmployee: (state, { payload }: PayloadAction<Employee>) => {
      return payload
    },
    setCVs: (state, { payload }: PayloadAction<CV[]>) => {
      state.cvs = payload
    }
  }
})

export const { setSelectedEmployee, setCVs } = selectedEmployeeSlice.actions

export default selectedEmployeeSlice.reducer
