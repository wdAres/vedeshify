import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'users',
    initialState:{
        users : []
    },
    reducers:{
        getUsers(state,action){
            state.users = action.payload.users
        }
    }
})

export const userActions = userSlice.actions

export default userSlice