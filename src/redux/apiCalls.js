import { publicRequest, userRequest } from "../requestMethods";
import { getProductFailure, getProductStart, getProductSuccess, deleteProductFailure, deleteProductStart, deleteProductSuccess, updateProductFailure, updateProductStart, updateProductSuccess, addProductFailure, addProductStart, addProductSuccess } from "./productRedux";
import { getClientFailure, getClientStart, getClientSuccess } from "./clientRedux";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import { orderFailure, orderStart, getOrderListSuccess } from "./orderRedux";

const user_id = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).id
//const user_id = ''
export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user)
        dispatch(loginSuccess(res.data));
        return true
    } catch {
        dispatch(loginFailure());
        return false
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

export const getClients = async (dispatch) => {
    dispatch(getClientStart());
    try {
        const res = await userRequest.get(`users/allusers/${user_id}`)
        console.log(res)
        dispatch(getClientSuccess(res.data));
    } catch {
        dispatch(getClientFailure());
    }
}

export const deleteProduct = async (product_id, dispatch) => {
    dispatch(deleteProductStart());
    try {
        const res = await userRequest.delete(`/product/deleteProduct/${user_id}/${product_id}`)
        //console.log(res.data)
        dispatch(deleteProductSuccess(product_id));
    } catch {
        dispatch(deleteProductFailure());
    }
}

export const updateProduct = async (id, product, dispatch) => {
    dispatch(updateProductStart());
    try {
        const res = await userRequest.put(`/product/updateProduct/${user_id}/${id}`, product)
        //console.log(res.data)
        dispatch(updateProductSuccess(res.data));
    } catch {
        dispatch(updateProductFailure());
    }
}

export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart());
    try {
        const res = await userRequest.post(`/product/createProduct/${user_id}`, product)
        dispatch(addProductSuccess(res.data));
    } catch {
        dispatch(addProductFailure());
    }
}

export const getOrderList = async (dispatch) => {
    dispatch(orderStart());
    try {
        const res = await userRequest.get(`/order/getAllOrders/${user_id}`)
        dispatch(getOrderListSuccess(res.data));
    } catch {
        dispatch(orderFailure());
    }
}