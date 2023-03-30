import React from "react";
import { Routes, Route } from "react-router-dom";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import Admin from "../Pages/Admin/Admin";
import Home from "../Pages/Home/Home";
import Ipad from "../Pages/Ipad/Ipad";
import Iphone from "../Pages/Iphone/Iphone";
import Login from "../Pages/Login/Login";
import Mac from "../Pages/Mac/Mac";
import Signup from "../Pages/Signup/Signup";
import SinglePage from "../Pages/SingleProduct/Pages/SInglePage";
import Store from "../Pages/Store/Store";
import Watch from "../Pages/Watch/Watch";
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

      <Route path="/iphone/:id" element={<SinglePage/>} />

      <Route path="/watch" element={<Watch />} />
      <Route path="/mac" element={<Mac />} />
      <Route path="/ipad" element={<Ipad />} />

      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};

export default AllRoutes;
