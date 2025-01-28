import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slice";

const Store = configureStore({
    reducer:{
        Cart: cartReducer,
    }
})
export default Store
