import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Iphone from "../Pages/Iphone/Iphone";
import Store from "../Pages/Store/Store";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/iphone" element={<Iphone />} />
    </Routes>
  );
};

export default AllRoutes;
