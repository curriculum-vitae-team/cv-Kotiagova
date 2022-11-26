import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  email: '',
  id: 0,
  access_token: ''
}
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email
      state.id = action.payload.id
      state.access_token = action.payload.access_token
    },
    removeUser(state) {
      state.email = ''
      state.id = 0
      state.access_token = ''
    }
  }
})

export const { setUser, removeUser } = userSlice.actions
export default userSlice.reducer
