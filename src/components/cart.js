import React from "react";
import { Link } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import CartItem from "./cartItem";
import axios from "axios";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
    };
  }

  componentDidMount() {
    const serverUrl = "http://localhost:3001/api/update_cart_items";
    axios
      .get(serverUrl)
      .then((response) => {
        const data = response.data;
        try {
          console.log(data);
          this.setState({ cartItems: data });
        } catch (parseError) {
          console.error("Error parsing JSON:", parseError.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error.message);
      });
  }
  render() {
    const { cartItems } = this.state;
    const total = cartItems.reduce(
      (sum, product) => sum + product.cost * product.quantity,
      0
    );
    return (
      <div id="cart">
        <Header />
        <main>
          <div id="mainCartDiv">
            <div id="cartHead">
              <div>
                <h6>Product</h6>
              </div>
              <div id="quanTotalHead">
                <h6>Quantity</h6>
                <h6>Total</h6>
              </div>
            </div>
            <div id="cartItems">
              {cartItems.map((item) => (
                <Link key={item.id} to={`/addtocart/${item.id}`}>
                  <CartItem key={item.id} item={item} />
                </Link>
              ))}
            </div>
            <div id="cartFoot">
              <div id="taxes">
                <p>Taxes and shipping are calculated at checkout</p>
              </div>
              <div id="checkout">
                <div id="subtotal">
                  <h4>Subtotal</h4>
                  <h3>£{total}</h3>
                </div>
                <button id="checkoutBtn">Go to checkout</button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Cart;
