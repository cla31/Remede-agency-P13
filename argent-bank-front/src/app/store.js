import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feature/authSlice.js"

/**
 * @name Store
 * @description State container which holds the application's state
 */

const store = configureStore({
    reducer: {
        auth: authReducer
    }
})
export default store