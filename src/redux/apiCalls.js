import { publicRequest } from "../requestMethods";
import { getProductFailure, getProductStart, getProductSuccess } from "./productRedux";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

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