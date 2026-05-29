import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./slice.js"

const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})

export default store;