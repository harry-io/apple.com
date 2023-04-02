import axios from "axios"
import { singleProductFaliureAction, singleProductRequestAction, singleProductSuccessAction } from "./Single.action"
import { getData } from "../../Utils/LocalStorage/ls"


export const GET_SINGLE_PRODUCT_REQUEST = "GET_SINGLE_PRODUCT_REQUEST"
export const GET_SINGLE_PRODUCT_SUCCESS = "GET_SINGLE_PRODUCT_SUCCESS"
export const GET_SINGLE_PRODUCT_FALIURE = "GET_SINGLE_PRODUCT_FALIURE"








export const getSingleProduct = (id) => (dispatch) =>{
    dispatch(singleProductRequestAction())
    console.log(id)
     axios.get(`https://back-ened-bolt.onrender.com/products/search/${id}`,{
        headers:{
            Authorization: `bearer ${getData("token_bolt")}`
        }
    })
    .then((res) =>{
        dispatch(singleProductSuccessAction(res.data))
    })
    .catch((err) =>{
        dispatch(singleProductFaliureAction())
    })
}