import { createSlice } from "@reduxjs/toolkit";

export const clientSlice = createSlice({
    name: "client",
    initialState: {
        clients: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        /*GET CLIENT */
        getClientStart: (state) => {
            state.isFetching = true
            state.error = false
        },
        getClientSuccess: (state, action) => {
            state.isFetching = false
            state.clients = action.payload
            console.log("hello")
        },
        getClientFailure: (state) => {
            state.isFetching = false
            state.error = true
        },
        /*DELETE CLIENT */
        deleteClientSuccess: (state, action) => {
            state.isFetching = false
            state.clients.splice(
                state.clients.findIndex(item => item._id === action.payload), 1
            )
        },
        /*UPDATE CLIENT */
        updateClientSuccess: (state, action) => {
            state.isFetching = false
            state.clients[state.clients.findIndex(item => item._id === action.payload.id)] = action.payload.clients;
        },
        /*add Client */
        addClientSuccess: (state, action) => {
            state.isFetching = false
            state.clients.push(action.payload)
        },

    },
});

export const { getClientFailure, getClientStart, getClientSuccess, deleteClientStart, updateClientStart, addClientStart } = clientSlice.actions;

export default clientSlice.reducer;