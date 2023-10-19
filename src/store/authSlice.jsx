import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    data: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        login(state, action) {
            state.isLoggedIn = true,
            state.data = action.payload.data
        }
    }
})

export const authActions = authSlice.actions

export default authSlice