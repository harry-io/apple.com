import {
  GET_CART_SUCCESS,
  CART_FAILURE,
  CART_REQUEST,
} from "./cart.actionType";
const initState = {
  isLoading: false,
  isError: false,
  cart: [],
};
export const CartReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case CART_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_CART_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        cart: payload,
      };
    }
    case CART_FAILURE: {
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
