import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "../Components/Navbar";
import Home from "../Pages/Home/Home";
const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
          </>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
