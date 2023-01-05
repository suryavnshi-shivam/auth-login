import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        username: "",
        password: "",
        form: [],
        error: "",
        toggle: false
    },
    reducers: {
        setUserName: (state, action) => {
            state.username = action.payload
        },
        setPassword: (state, action) => {
            state.password = action.payload
        },
        setForm: (state, action) => {
            state.form = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        },
        setToggle: (state, action) => {
            state.toggle = action.payload
        }
    }
})

export const { setUserName, setPassword, setForm, setError, setToggle } = authSlice.actions

export default authSlice.reducer