import React from "react";
import Home from "./components/home";
import About from "./components/about";
import Store from "./components/store";
import AddToCart from "./components/addToCart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/store" element={<Store />} />
          <Route exact path="/addtocart" element={<AddToCart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
