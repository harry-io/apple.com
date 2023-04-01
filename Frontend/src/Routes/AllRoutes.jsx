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

import Dashboard from "../Components/Admin/Dashboard";

import Watch from "../Pages/Watch/Watch";
import Shipping from "../Pages/Address/Shipping";
import Payment from "../Pages/Payment/Payment";

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

      <Route
        path="/store"
        element={
          <>
            <Navbar />
            <Store />
            <Footer />
          </>
        }
      />
      <Route
        path="/iphone"
        element={
          <>
            <Navbar />
            <Iphone />
            <Footer />
          </>
        }
      />
      <Route
        path="/watch"
        element={
          <>
            <Navbar />
            <Watch />
            <Footer />
          </>
        }
      />
      <Route
        path="/mac"
        element={
          <>
            <Navbar />
            <Mac />
            <Footer />
          </>
        }
      />
      <Route
        path="/ipad"
        element={
          <>
            <Navbar />
            <Ipad />
            <Footer />
          </>
        }
      />
      <Route path="store/products/:id" element={<SinglePage />} />
      <Route path="/iphone/:id" element={<SinglePage />} />
      <Route path="/ipad/:id" element={<SinglePage />} />
      <Route path="/mac/:id" element={<SinglePage />} />
      <Route path="/watch/:id" element={<SinglePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/shipping" element={<Shipping />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
};

export default AllRoutes;
