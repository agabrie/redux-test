import { createSlice } from '@reduxjs/toolkit'

const profileSlice = createSlice({
  name: 'profile',
  initialState: {firstName:"", lastName:"", email:""},
  reducers: {
    // this sets the entire profile object
    setProfile(state, action) {
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.email = action.payload.email
    },
    // this sets only the firstName
    setFirstName(state, action){
        state.firstName = action.payload
    }
  }
})

export const { setProfile, setFirstName} = profileSlice.actions
export default profileSlice.reducer