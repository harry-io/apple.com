import axios from "axios";
import toast from "react-hot-toast";
import { setData } from "../../Utils/LocalStorage/ls";
import { BiError } from "react-icons/bi";

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
    .post(`https://back-ened-bolt.onrender.com/users/register`, body)
    .then((res) => {
      console.log(res);
      toast.success("Account created successfully !", {
        style: {
          borderRadius: "50px",
          background: "#989898",
          color: "#ffffff",
          padding: "1rem 1.5rem",
          fontWeight: "600",
        },
      });
      //
      //
      navigate("/login");
    })
    .catch((error) => {
      toast.error(
        error.response.data.msg === "email already used"
          ? "Account already exists !"
          : error.message,
        {
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
        }
      );
    });
};
//LOGIN ACTION
export const loginAction = (body, navigate) => (dispatch) => {
  dispatch(authRequest());
  axios
    .post(`https://back-ened-bolt.onrender.com/users/login`, body)
    .then((res) => {
      dispatch(loginSuccess(res.data.token));
      setData("token_bolt", res.data.token);
      toast.success("Logged in successfully !", {
        style: {
          borderRadius: "50px",
          background: "#989898",
          color: "#ffffff",
          padding: "1rem 1.5rem",
          fontWeight: "600",
        },
      });
      navigate("/");
    })
    .catch((error) => {
      toast.error(error.response.data.msg, {
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
