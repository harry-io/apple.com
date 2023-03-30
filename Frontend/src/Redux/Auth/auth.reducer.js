import { getData } from "../../Utils/LocalStorage/ls";
import {
  AUTH_FAILURE,
  AUTH_REQUEST,
  LOGIN_AUTH_SUCCESS,
  SIGNUP_AUTH_SUCCESS,
} from "./auth.actionTypes";

let token_bolt = getData("token_bolt");
const initialState = {
  isLoading: false,
  isError: false,
  isAuth: token_bolt ? true : false,
  token: token_bolt || "",
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
        token: payload,
      };
    }

    case AUTH_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
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
