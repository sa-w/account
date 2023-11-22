import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

// Define a type for the slice state
export interface createAccount {
  email: string,
  password: string
}

// Define the initial state using that type
const initialState: createAccount = {
  email: "",
  password: ""
}

export const createAccountSlice = createSlice({
  name: 'createAccount',
  initialState,
  reducers: {
    addEmail: (state, value) => {
      state.email = value.payload
    },
    addPassword: (state, value) => {
      state.password = value.payload
    },
    reset: (state) => {
      state.email = "",
        state.password = ""
    }
  }
})

// Action creators are generated for each case reducer function
export const { addEmail, addPassword, reset } = createAccountSlice.actions

export default createAccountSlice.reducer