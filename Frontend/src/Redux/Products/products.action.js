import {
  GET_PRODUCTS_SUCCESS,
  PRODUCTS_FAILURE,
  PRODUCTS_REQUEST,
} from "./products.actiontypes";
import axios from "axios";
import { getData } from "../../Utils/LocalStorage/ls";

export const productsRequest = () => {
  return {
    type: PRODUCTS_REQUEST,
  };
};
export const productsFailure = () => {
  return {
    type: PRODUCTS_FAILURE,
  };
};
export const getProductsSuccess = (payload) => {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload,
  };
};
//
//
export const getProducts = (url) => (dispatch) => {
  dispatch(productsRequest());
  axios
    .get(url, {
      headers: {
        Authorization: getData("token_bolt"),
      },
    })
    .then((res) => {
      dispatch(getProductsSuccess(res.data));
    })
    .catch(() => dispatch(productsFailure()));
};
