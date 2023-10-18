import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    credentials: null
}

const authSlice = createSlice({
    name:'auth',
    initialState:initialState,
    reducers:{
        signup(state,action){
            state.credentials = action.payload
            state.isLoggedIn = true ;
        }
    }
})

export const authActions = authSlice.actions

export default authSlice