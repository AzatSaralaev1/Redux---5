import { configureStore } from "@reduxjs/toolkit";
import titleReducer from './slices/titleSlice'
import usersReducer from './slices/usersSlice'

export const store = configureStore({
    reducer: {
        titleReducer,
        usersReducer
    }
})