import { GET_SINGLE_PRODUCT_FALIURE, GET_SINGLE_PRODUCT_REQUEST, GET_SINGLE_PRODUCT_SUCCESS } from "./Single.actionType"





const initialState = {
    isLoading:false,
    isError:false,
    product:[]
}


export const singleProductReducer = (state = initialState, {type, payload}) =>{
 switch(type){
    case GET_SINGLE_PRODUCT_REQUEST:{
        return {...state, isLoading:true}
    }
    case GET_SINGLE_PRODUCT_SUCCESS:{
        return {...state, isLoading:false, product:payload}
    }
    case GET_SINGLE_PRODUCT_FALIURE:{
        return {...state, loading:false, isError:true}
    }
    default :
    return state
 }
}