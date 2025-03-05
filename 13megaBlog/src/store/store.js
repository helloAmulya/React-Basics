import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../store/authSlice'

const store = configureStore({

    reducer: {
        auth: authReducer,
        // post: postSlice
        // do the post, very complex and job level
    }
})
export default store;