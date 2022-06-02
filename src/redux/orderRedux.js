import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: "orderlist",
    initialState: {
        orderList: null,
        isFetching: false,
        error: false,
        isLoaded: false,
    },
    reducers: {
        orderStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getOrderListSuccess: (state, action) => {
            state.isFetching = false;
            state.orderList = action.payload;
            state.isLoaded = true;
        },
        orderFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        }
    }
})

export const { orderStart, getOrderListSuccess, orderFailure } = orderSlice.actions;
export default orderSlice.reducer;