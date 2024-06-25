import React from "react";
import Header from "./header";
import Footer from "./footer";
import cartItems from "../server/json/cart.json"

class Cart extends React.Component {
  render() {
    return (
      <div id="cart">
        <Header />
        <main>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Cart;
