import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../Screens/Dashoard/Home";
import Products from "../../Screens/Products";
import Navbar from "../../Components/Navbar/index";
import YourProducts from "../../Screens/YourProducts";
import Single from "../../Screens/SingleProduct/Single";
const Routing = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/single/:id" element={<Single />} />
        <Route path="yourproducts" element={<YourProducts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
