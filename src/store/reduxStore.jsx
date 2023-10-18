import  { configureStore } from '@reduxjs/toolkit' ;
import authSlice from "./authSlice";



const reduxStore = configureStore({
    reducer: {
        auth:authSlice.reducer
    }
})

export default reduxStore