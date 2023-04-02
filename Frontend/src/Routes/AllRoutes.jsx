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
import Store from "../Pages/Store/Store";
import { ChakraProvider } from "@chakra-ui/react";
import Dashboard from "../Components/Admin/Dashboard";
import Watch from "../Pages/Watch/Watch";
import PrivateRoute from "./PrivateRoute";
import Shipping from "../Pages/Address/Shipping";
import Payment from "../Pages/Payment/Payment";
import SearchPage from "../Pages/SearchPage/SearchPage";
import SinglePage from "../Pages/SingleProduct/Pages/SInglePage";



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
        path="/search/:query"
        element={
          <>
            <PrivateRoute>
              <Navbar />
              <SearchPage />
              <Footer />
            </PrivateRoute>
          </>
        }
      />
      <Route
        path="/store"
        element={
          <>
            <PrivateRoute>
              <Navbar />
              <Store />
              <Footer />
            </PrivateRoute>
          </>
        }
      />
      <Route
        path="/iphone"
        element={
          <>
            <PrivateRoute>
              <Navbar />
              <Iphone />
              <Footer />
            </PrivateRoute>
          </>
        }
      />
      <Route
        path="/watch"
        element={
          <>
            <PrivateRoute>
              <Navbar />
              <Watch />
              <Footer />
            </PrivateRoute>
          </>
        }
      />
      <Route
        path="/mac"
        element={
          <>
            <PrivateRoute>
              <Navbar />
              <Mac />
              <Footer />
            </PrivateRoute>
          </>
        }
      />
      <Route
        path="/ipad"
        element={
          <>
            <PrivateRoute>
              <Navbar />
              <Ipad />
              <Footer />
            </PrivateRoute>
          </>
        }
      />
      <Route
        path="store/products/:id"
        element={
          <PrivateRoute>
           <SinglePage/>
          </PrivateRoute>
        }
      />
      <Route
        path="/iphone/:id"
        element={
          <PrivateRoute>
           <SinglePage/>
          </PrivateRoute>
        }
      />
      <Route
        path="/ipad/:id"
        element={
          <PrivateRoute>
           <SinglePage/>
          </PrivateRoute>
        }
      />
      <Route
        path="/mac/:id"
        element={
          <PrivateRoute>
            <SinglePage/>
          </PrivateRoute>
        }
      />
      <Route
        path="/watch/:id"
        element={
          <PrivateRoute>
            <SinglePage/>
          </PrivateRoute>
        }
      />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={
        <ChakraProvider>
          <Admin />
        </ChakraProvider>
      } />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/shipping" element={<Shipping />} />
      <Route path="/payment" element={<Payment />} />
      {/* <Route path="/cart" element={<Cart/>} /> */}
    </Routes>
  );
};

export default AllRoutes;
