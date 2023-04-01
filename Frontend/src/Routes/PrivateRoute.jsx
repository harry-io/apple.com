import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const isAuth = useSelector((store) => store.authReducer.isAuth);
  if (!isAuth) {
    return <Navigate state={location.pathname} to="/login" replace />;
  }
  return children;
};

export default PrivateRoute;
