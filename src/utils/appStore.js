import { configureStore } from "@reduxjs/toolkit";
import userReducsr from "./userSlice"
import moviesReducer from './movieSlice'
import  gptReducer from './gptSlice'

const appStore = configureStore({ 
    reducer:{
        user:userReducsr,
        movies :moviesReducer,
        gpt:gptReducer
    }
})

export default appStore;