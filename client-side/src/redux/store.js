import {configureStore} from '@reduxjs/toolkit';
import authReducer from './features/authentication/authSlice';
import productsReducer from './features/products/productsSlice'

export const store = configureStore({
    reducer: {
        products: productsReducer,
        auth: authReducer
    }
})