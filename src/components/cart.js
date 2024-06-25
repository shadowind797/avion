import React from "react";
import {Link} from "react-router-dom"
import Header from "./header";
import Footer from "./footer";
import CartItem from "./cartItem";
import cartItems from "../server/json/cart.json";

class Cart extends React.Component {
  render() {
    return (
      <div id="cart">
        <Header />
        <main>
          <div id="mainCartDiv">
            <div id="cartHead">
              <div>
                <h6></h6>
              </div>
              <div>
                <h6></h6>
                <h6></h6>
              </div>
            </div>
            <div id="cartItems">
              {cartItems.map((item) => (
                <Link key={item.id} to={`/addtocart/${item.id}`}>
                  <CartItem key={item.id} item={item} />
                </Link>
              ))}
            </div>
            <div id="cartFoot"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Cart;
