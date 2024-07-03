import React from "react";
import Home from "./components/home";
import About from "./components/about";
import Store from "./components/store";
import AddToCart from "./components/addToCart";
import AltAdd from "./components/altAddToCart";
import Cart from "./components/cart";
import Search from "./components/search";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/store" element={<Store />} />
          <Route exact path="/addtocart/:itemId" element={<AddToCart />} />
          <Route exact path="/altaddtocart/:itemId" element={<AltAdd />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/store/search/:search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
