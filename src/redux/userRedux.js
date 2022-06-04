import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
        isAdmin: false,
        token: '',
        id: '',
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload.others;
            state.token = action.payload.others.token;
            state.id = action.payload.others._id;
            if (action.payload.others.role == "ADMIN") {
                state.isAdmin = true;
            }
            else {
                state.isAdmin = false;
            }
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
            state.isAdmin = false;
        }
    }
})

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;
export default userSlice.reducer;