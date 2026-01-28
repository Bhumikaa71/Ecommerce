import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import SellerViewAll from './Components/ViewAllPage/SellerViewAll';
import CellPhoneViewAll from './Components/ViewAllPage/CellPhoneViewAll';

import './App.css';
// pages
import Register from "./Components/Pages/Register";
import Login from "./Components/Pages/Login";
import BuyNow from "./Components/Pages/BuyNow";
import Contact from "./Components/Pages/Contact";
import Profile from "./Components/Pages/Profile";
import CheckOut from "./Components/Pages/CheckOut";
import OutletLayout from "./Components/layouts/OutletLayout";
// import AddToCart from "./Components/Pages/AddToCart";
// import AddToCartProduct from "./Components/product/AddToCartProduct";
import AddHome from "./Components/product/AddHome";


function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<OutletLayout />}>
        <Route path="/sellerviewall" element={<SellerViewAll />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cellphoneviewall" element={<CellPhoneViewAll />} />
        <Route path="/buynow" element={<BuyNow />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/addtocartproduct" element={<AddHome />} />qw``


        </Route>







        </Routes>
        </Router>

    

  );
}

export default App;




     




