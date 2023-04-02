import {
  GET_CART_SUCCESS,
  CART_FAILURE,
  CART_REQUEST,
  DELETE_CART_SUCCESS,
} from "./cart.actionType";
import axios from "axios";
import { getData } from "../../Utils/LocalStorage/ls";

export const CartRequest = () => {
  return {
    type: CART_REQUEST,
  };
};
export const CartFailure = () => {
  return {
    type: CART_FAILURE,
  };
};
export const getCartSuccess = (payload) => {
  return {
    type: GET_CART_SUCCESS,
    payload,
  };
};
export const deleteCartSuccess = () => {
  return {
    type: DELETE_CART_SUCCESS,
  };
};
//
//
export const getCart = (url) => (dispatch) => {
  dispatch(CartRequest());
  axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${getData("token_bolt")}`,
      },
    })
    .then((res) => {
      dispatch(getCartSuccess(res.data));
      console.log(res.data);
    })
    .catch(() => dispatch(CartFailure()));
};
export const deleteCart = (url) => (dispatch) => {
  dispatch(CartRequest());
  axios
    .delete(url, {
      headers: {
        Authorization: `Bearer ${getData("token_bolt")}`,
      },
    })
    .then((res) => {
      dispatch(getCart("https://back-ened-bolt.onrender.com/cartProducts"));
    })
    .catch(() => dispatch(CartFailure()));
};
