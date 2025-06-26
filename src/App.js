import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import Home from "./Pages/Home";
import Deal from "./Pages/Deal";
import Banner from "./Pages/Banner";
import Sign from "./Pages/Sign";
import Login from "./Pages/Login";
import CartPage from "./Pages/CartPage";
import Shop from "./Pages/Shop";
import ProductListing from "../src/Components/Menfashion/ProductListing";
import ProductPageWrapper from "../src/Components/Menfashion/ProductPageWrapper";
import Checkout from "../src/Components/Menfashion/CheckoutPage";
import PaymentPage from "../src/Components/Menfashion/PaymentPage";
import WomenProductListing from "./Components/WomenFashion/WomenListing";
import WomenProductPageWrapper from "../src/Components/WomenFashion/WomenWrapper";
import KidsProductListing from "../src/Components/Kids/KidsListing";
import KidsProductPageWrapper from "../src/Components/Kids/KidsWrapper";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Deal />
              <Banner />
            </>
          }
        />
        <Route path="/sign-up" element={<Sign />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/shop" element={<Shop />} />
        
        {/* Men's fashion routes */}
        <Route path="/products" element={<ProductListing />} />
        <Route path="/product/:id" element={<ProductPageWrapper />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<PaymentPage />} />
        
        {/* Women's fashion routes */}
        <Route path="/women/products" element={<WomenProductListing />} />
        <Route path="/women/product/:id" element={<WomenProductPageWrapper />} />
        
        {/* Kids fashion routes */}
        <Route path="/kids/products" element={<KidsProductListing />} />
        <Route path="/kids/product/:id" element={<KidsProductPageWrapper />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}