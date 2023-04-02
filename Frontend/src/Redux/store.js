import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./Auth/auth.reducer";
import { productsReducer } from "./Products/products.reducer";
import AdminReducer from './Admin/admin.reducer'
import {CartReducer} from "./Cart/cart.reducer"
import thunk from "redux-thunk";
import { singleProductReducer } from "./SingleProduct/Single.reducer";


//
const rootReducer = combineReducers({
  authReducer,
  productsReducer,
<<<<<<< HEAD
  singleProductReducer,
  AdminReducer
=======
  singleProductReducer
  AdminReducer,
  CartReducer,
  
>>>>>>> 479f86232d47dd6eada72cf39b4208fa639b635f
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
