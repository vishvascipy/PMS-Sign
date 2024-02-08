import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    id: '',
    isLoggedIn: false,
}

export const LoginedUserSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loggedUser: (state, action) => {
            state.id = action.payload
        },
        isLoggedIn: (state) => {
            state.isLoggedIn = true
        },
        isNotLoggedIn: (state) => {
            state.isLoggedIn = false
        }
    }
})

// Action creators are generated for each case reducer function
export const { loggedUser, isLoggedIn, isNotLoggedIn, } = LoginedUserSlice.actions

export default LoginedUserSlice.reducer