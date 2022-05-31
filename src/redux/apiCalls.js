import { publicRequest, userRequest } from "../requestMethods";
import { getProductFailure, getProductStart, getProductSuccess, deleteProductFailure, deleteProductStart, deleteProductSuccess } from "./productRedux";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

const user_id = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser._id

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user)
        dispatch(loginSuccess(res.data));
    } catch {
        dispatch(loginFailure());
    }
}

export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try {
        const res = await publicRequest.get("/product/getAllProducts")
        dispatch(getProductSuccess(res.data));
    } catch {
        dispatch(getProductFailure());
    }
}

export const deleteProduct = async (product_id, dispatch) => {
    dispatch(deleteProductStart());
    try {
        const res = await userRequest.delete(`/product/deleteProduct/${user_id}/${product_id}`)
        console.log(res.data)
        dispatch(deleteProductSuccess(product_id));
    } catch {
        dispatch(deleteProductFailure());
    }
}