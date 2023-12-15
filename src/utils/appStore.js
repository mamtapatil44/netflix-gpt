import { configureStore } from "@reduxjs/toolkit";
import userReducsr from "./userSlice"
import moviesReducer from './movieSlice'

const appStore = configureStore({ 
    reducer:{
        user:userReducsr,
        movies :moviesReducer
    }
})

export default appStore;