import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from './types'

const initialState: User = {
  email: '',
  is_verified: false,
  access_token: '',
  id: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<User>) => {
      return payload
    }
  }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
