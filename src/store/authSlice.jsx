import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    data: null,
    error:null
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        login(state, action) {
            state.isLoggedIn = true,
            state.data = action.payload.data
        },
        logout(state,action){
            state.isLoggedIn = false,
            state.data = null
        }
    }
})

export const authActions = authSlice.actions

export default authSlice