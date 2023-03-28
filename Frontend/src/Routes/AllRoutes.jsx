import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "../Components/Navbar";
import Home from "../Pages/Home/Home";
import Store from "../Pages/Store/Store";
const AllRoutes = () => {
  return (
    <Routes>
<<<<<<< HEAD
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
          </>
        }
      />
=======
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
>>>>>>> ee4b37f06f6a4db7a7a78da5c7234eabbf96c6eb
    </Routes>
  );
};

export default AllRoutes;
