import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    data:null
}

const authSlice = createSlice({
    name:'auth',
    initialState:initialState,
    reducers:{
        auth(state,action){
            state.data = action.payload.data
            state.isLoggedIn = true ;
        }
    }
})

export const authActions = authSlice.actions

export default authSlice