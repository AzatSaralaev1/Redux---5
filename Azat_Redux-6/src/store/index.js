import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../store/slice/PostsSlice'

export const store = configureStore({
    reducer: {
        postsReducer
    }
})