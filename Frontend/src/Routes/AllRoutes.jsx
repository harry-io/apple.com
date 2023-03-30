import React from "react";
import { Routes, Route } from "react-router-dom";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import Admin from "../Pages/Admin/Admin";
import Home from "../Pages/Home/Home";
import Iphone from "../Pages/Iphone/Iphone";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Store from "../Pages/Store/Store";
const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        }
      />
      <Route path="/store" element={<Store />} />
      <Route path="/iphone" element={<Iphone />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />

    </Routes>
  );
};

export default AllRoutes;
