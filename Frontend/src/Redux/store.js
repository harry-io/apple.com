import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./Auth/auth.reducer";
import { productsReducer } from "./Products/products.reducer";
import thunk from "redux-thunk";
import { singleProductReducer } from "./SingleProduct/Single.reducer";


//
const rootReducer = combineReducers({
  authReducer,
  productsReducer,
  singleProductReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
