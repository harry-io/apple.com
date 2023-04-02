import { removeData } from "jquery";
import { getData } from "../../Utils/LocalStorage/ls";
import {
  AUTH_FAILURE,
  AUTH_REQUEST,
  LOGIN_AUTH_SUCCESS,
  LOGOUT,
  SIGNUP_AUTH_SUCCESS,
} from "./auth.actionTypes";

let token_bolt = getData("token_bolt");
let role_bolt = getData("role_bolt");
let user_id_bolt = getData("user_id_bolt");
const initialState = {
  isLoading: false,
  isError: false,
  isAuth: token_bolt ? true : false,
  token: token_bolt || "",
  role: role_bolt || "user",
  id: user_id_bolt || "",
};
//
//
const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SIGNUP_AUTH_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case LOGIN_AUTH_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload.token,
        id: payload.id,
        role: payload.role,
      };
    }

    case AUTH_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isAuth: false,
      };
    }
    default: {
      return state;
    }
  }
};
//
//
export { authReducer };
