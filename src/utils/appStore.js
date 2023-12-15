import { configureStore } from "@reduxjs/toolkit";
import userReducsr from "./userSlice"

const appStore = configureStore({ 
    reducer:{
        user:userReducsr
    }
})

export default appStore;