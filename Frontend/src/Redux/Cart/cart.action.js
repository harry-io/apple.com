import {
  GET_CART_SUCCESS,
  CART_FAILURE,
  CART_REQUEST,
  DELETE_CART_SUCCESS,
} from "./cart.actionType";
import axios from "axios";
import { getData } from "../../Utils/LocalStorage/ls";
import { toast } from "react-hot-toast";
import { BiError } from "react-icons/bi";

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
export const addCart = (url, body) => (dispatch) => {
  dispatch(CartRequest());
  axios
    .post(url, body, {
      headers: {
        Authorization: `Bearer ${getData("token_bolt")}`,
      },
    })
    .then((res) => {
      dispatch(getCart("https://back-ened-bolt.onrender.com/cartProducts"));
    })
    .then(() => {
      toast.success("Added to Cart successfully !", {
        style: {
          borderRadius: "50px",
          background: "#989898",
          color: "#ffffff",
          padding: "1rem 1.5rem",
          fontWeight: "600",
        },
      });
    })
    .catch(() => {
      dispatch(CartFailure());
      toast.error("Product already in the cart !", {
        icon: (
          <BiError
            style={{ color: "yellow", fontSize: "1.5rem", fontWeight: "800" }}
          />
        ),
        style: {
          borderRadius: "50px",
          background: "#989898",
          color: "#ffffff",
          padding: "1rem 1.5rem",
          fontWeight: "600",
        },
      });
    });
};

export const IncCart = (url, body) => (dispatch) => {
  dispatch(CartRequest());
  axios
    .patch(url, body, {
      headers: {
        Authorization: `Bearer ${getData("token_bolt")}`,
      },
    })
    .then((res) => {
      dispatch(getCart("https://back-ened-bolt.onrender.com/cartProducts"));
    })
    .catch(() => dispatch(CartFailure()));
};
