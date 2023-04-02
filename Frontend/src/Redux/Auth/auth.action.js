import axios from "axios";
import toast from "react-hot-toast";
import { removeData, setData } from "../../Utils/LocalStorage/ls";
import { BiError } from "react-icons/bi";

import {
  AUTH_FAILURE,
  AUTH_REQUEST,
  LOGIN_AUTH_SUCCESS,
  LOGOUT,
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
export const logout = () => {
  return { type: LOGOUT };
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
export const loginAction = (body, navigate, location) => (dispatch) => {
  dispatch(authRequest());
  axios
    .post(`https://back-ened-bolt.onrender.com/users/login`, body)
    .then((res) => {
      console.log(res.data);
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
      navigate(location.state === null ? "/" : location.state, {
        replace: true,
      });
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
// LOGOUT ACTION
export const logoutAction = (dispatch) => {
  dispatch(logout());
  removeData("token_bolt");
  toast.success("Logged out successfully !", {
    style: {
      borderRadius: "50px",
      background: "#989898",
      color: "#ffffff",
      padding: "1rem 1.5rem",
      fontWeight: "600",
    },
  });
};

