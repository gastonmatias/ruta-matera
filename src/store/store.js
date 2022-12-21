import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart/cartSlice";
import { shopSlice } from "./shop/shopSlice";


export const store = configureStore({
    reducer:{
        cart: cartSlice.reducer,
        shop: shopSlice.reducer
    }
})