import axios from "axios";
import toast from "react-hot-toast";
import { setData } from "../../Utils/LocalStorage/ls";

import {
  AUTH_FAILURE,
  AUTH_REQUEST,
  LOGIN_AUTH_SUCCESS,
  SIGNUP_AUTH_SUCCESS,
} from "./auth.actionTypes";
//
//
//
export const authRequest = () => {
  return { type: AUTH_REQUEST };
};
export const authFailure = () => {
  return { type: AUTH_FAILURE };
};
//
export const loginSuccess = (payload) => {
  return { type: LOGIN_AUTH_SUCCESS, payload };
};
//
export const signupSuccess = () => {
  return { type: SIGNUP_AUTH_SUCCESS };
};
//
//
//
//
export const signupAction = (body, navigate) => (dispatch) => {
  dispatch(authRequest());
  axios
    .post(`https://back-ened-bolt.onrender.com/users/signup`, body)
    .then((res) => {
      // toast(res.data.message);
      navigate("/login");
    })
    .catch((error) => toast.error(error.response.data.message));
};
//LOGIN ACTION
export const loginAction = (body, navigate) => (dispatch) => {
  dispatch(authRequest());
  axios
    .post(`https://back-ened-bolt.onrender.com/users/login`, body)
    .then((res) => {
      dispatch(loginSuccess(res.data.token));
      setData("token_bolt", res.data.token);
      toast(res.data.msg);
      navigate("/");
    })
    .catch((error) => toast("Wrong Credentials !"));
};
