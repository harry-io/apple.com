
import { GET_SINGLE_PRODUCT_FALIURE, GET_SINGLE_PRODUCT_REQUEST, GET_SINGLE_PRODUCT_SUCCESS } from "./Single.actionType"


export const singleProductRequestAction = () =>{
    return {type:GET_SINGLE_PRODUCT_REQUEST}
}

export const singleProductSuccessAction = (payload) =>{
    return {type:GET_SINGLE_PRODUCT_SUCCESS, payload}
}

export const singleProductFaliureAction = () =>{
    return {type:GET_SINGLE_PRODUCT_FALIURE}
}


