import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "./redux-toolkit/authSlice";

const reducer = combineReducers({
    "auth": authSlice
})

export const store = configureStore({
    reducer: reducer
})
