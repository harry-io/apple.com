import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./Auth/auth.reducer";
import { productsReducer } from "./Products/products.reducer";
import AdminReducer from './Admin/admin.reducer'
import {CartReducer} from "./Cart/cart.reducer"
import thunk from "redux-thunk";
//
const rootReducer = combineReducers({
  authReducer,
  productsReducer,
  AdminReducer,
  CartReducer,
  
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
