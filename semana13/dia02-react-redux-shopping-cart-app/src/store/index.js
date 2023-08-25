import {configureStore} from "@reduxjs/toolkit"

import cartReducer from './carl/slice'

export const store = configureStore({
    reducer: {
        cart: cartReducer

    }
})