import React, { useState, useRef, Component } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Header from "./header";
import Footer from "./footer";
import Slider from "./slider";
import Item from "./item";
import delivery from "../img/Delivery.svg";
import checkmark from "../img/Checkmark-outline.svg";
import purschase from "../img/Purchase.svg";
import recycle from "../img/Sprout.svg";
import tick from "../img/Checkmark-filled.svg";
import photo1 from "../img/Photo1.png";
import photo2 from "../img/Photo2.png";
import photo3 from "../img/Photo3.png";
import photo4 from "../img/Photo4.png";
import photo5 from "../img/Photo5.png";
import photo6 from "../img/Photo6.png";
import photo7 from "../img/Photo7.png";
import photo8 from "../img/Photo8.png";
import photo9 from "../img/Photo9.png";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemId: this.props.params.itemId,
      quantity: 1,
      cartItems: [],
      jsonItems: [],
      removeBtn: false,
      addStr: this.props.params.addStr,
    };
  }

  async componentDidMount() {
    try {
      const [itemsResponse, cartItemsResponse] = await Promise.all([
        axios.get("http://localhost:3001/api/items"),
        axios.get("http://localhost:3001/api/update_cart_items"),
      ]);

      this.setState({
        jsonItems: itemsResponse.data,
        cartItems: cartItemsResponse.data,
      });
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }

  setImg(img) {
    if (img === "img/Photo1.png") {
      const imgPath = photo1;
      return imgPath;
    } else if (img === "img/Photo2.png") {
      const imgPath = photo2;
      return imgPath;
    } else if (img === "img/Photo3.png") {
      const imgPath = photo3;
      return imgPath;
    } else if (img === "img/Photo4.png") {
      const imgPath = photo4;
      return imgPath;
    } else if (img === "img/Photo5.png") {
      const imgPath = photo5;
      return imgPath;
    } else if (img === "img/Photo6.png") {
      const imgPath = photo6;
      return imgPath;
    } else if (img === "img/Photo7.png") {
      const imgPath = photo7;
      return imgPath;
    } else if (img === "img/Photo8.png") {
      const imgPath = photo8;
      return imgPath;
    } else if (img === "img/Photo9.png") {
      const imgPath = photo9;
      return imgPath;
    }
  }

  pushInCart(cartItem) {
    const { cartItems } = this.state;
    const updatedCartItems = [...cartItems, cartItem];

    this.setState({ cartItems: updatedCartItems });

    fetch("http://localhost:3001/api/update_cart_items", {
      method: "POST",
      body: JSON.stringify(updatedCartItems),
    });
  }

  removeFromCart(idToRemove) {
    const { cartItems } = this.state;
    const updatedCartItems = cartItems.filter(
      (item) => item.id !== String(idToRemove)
    );

    this.setState({ cartItems: updatedCartItems });

    fetch("http://localhost:3001/api/update_cart_items", {
      method: "POST",
      body: JSON.stringify(updatedCartItems),
    });
  }

  addProduct = () => {
    this.setState((prevState) => ({ quantity: prevState.quantity + 1 }));
  };

  removeProduct = () => {
    if (this.state.quantity > 1) {
      this.setState((prevState) => ({ quantity: prevState.quantity - 1 }));
    }
  };

  checkInCart(itemId) {
    return this.state.cartItems.some((item) => item.id === itemId);
  }

  render() {
    const { itemId, jsonItems, removeBtn, quantity, addStr } = this.state;
    const firstFourItems = jsonItems.slice(0, 10);
    const item = jsonItems.find((i) => i.id == itemId);

    if (jsonItems.length > 1) {
      const { id, img, name, cost, description, dimensions } = item;
      const cartItem = {
        id: itemId,
        name: name,
        img: img,
        description: description,
        cost: cost,
        quantity: quantity,
      };
      return (
        <div id="addtocart">
          <Header />
          <main>
            <div id="cartadd">
              <div id="addImg">
                <img src={this.setImg(img)} alt="Product" />
              </div>
              <div id="addInfo">
                <div id="addHead">
                  <h1>{name}</h1>
                  <p>£{cost}</p>
                </div>
                <div id="addDesc">
                  <h3>Product description</h3>
                  <p>{description}</p>
                </div>
                <div id="addDimens">
                  <h3>Dimensions</h3>
                  <div id="table">
                    <div id="first">
                      <h4>Height</h4>
                      <p>{dimensions.h}</p>
                    </div>
                    <div id="second">
                      <h4>Width</h4>
                      <p>{dimensions.w}</p>
                    </div>
                    <div id="third">
                      <h4>Depth</h4>
                      <p>{dimensions.d}</p>
                    </div>
                  </div>
                </div>
                <div id="addQuant">
                  <h3>Quantity</h3>
                  <div id="calc">
                    <button
                      id="minus"
                      onClick={() => {
                        this.removeProduct();
                      }}
                    ></button>
                    <div>
                      <p>{quantity}</p>
                    </div>
                    <button
                      id="plus"
                      onClick={() => {
                        this.addProduct();
                      }}
                    ></button>
                  </div>
                </div>
                <div id="add">
                  <button
                    id="addBtn"
                    onClick={() => {
                      this.pushInCart(cartItem);
                    }}
                    style={
                      !this.checkInCart(itemId)
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  >
                    Add to cart
                  </button>
                  <button
                    id="inCartBtn"
                    onMouseOver={() => this.setState({ removeBtn: true })}
                    style={
                      !removeBtn && this.checkInCart(itemId)
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  >
                    Already in cart
                  </button>
                  <button
                    id="removeBtn"
                    onMouseLeave={() => this.setState({ removeBtn: false })}
                    onClick={() => this.removeFromCart(id)}
                    style={
                      removeBtn && this.checkInCart(itemId)
                        ? { display: "block" }
                        : { display: "none" }
                    }
                  >
                    <div></div>
                    <p>Remove</p>
                  </button>
                  <button id="favSaveBtn">
                    <p>Save to favorites</p>
                  </button>
                </div>
              </div>
            </div>
            <h2>You might also love these</h2>
            <div id="alsoBuy">
              {addStr === "addtocart"
                ? firstFourItems.map((item) => (
                    <Link key={item.id} to={`/altaddtocart/${item.id}`}>
                      <Item key={item.id} item={item} />
                    </Link>
                  ))
                : firstFourItems.map((item) => (
                    <Link key={item.id} to={`/addtocart/${item.id}`}>
                      <Item key={item.id} item={item} />
                    </Link>
                  ))}
            </div>
            <div id="plusesOfBrand">
              <h2>What makes our brand different</h2>
              <div id="plusBoxes">
                <div className="box">
                  <img src={delivery}></img>
                  <h3>Next day as standard</h3>
                  <p>
                    Order before 3pm and get your order the next day as standard
                  </p>
                </div>
                <div className="box">
                  <img src={checkmark}></img>
                  <h3>Made by true artisans</h3>
                  <p>
                    Handmade crafted goods made with real passion and
                    craftmanship
                  </p>
                </div>
                <div className="box">
                  <img src={purschase}></img>
                  <h3>Unbeatable prices</h3>
                  <p>
                    For our materials and quality you won't find better prices
                    anywhere
                  </p>
                </div>
                <div className="box">
                  <img src={recycle}></img>
                  <h3>Recycled packaging</h3>
                  <p>
                    We use 100% recycled to ensure our footprint is more
                    manageable
                  </p>
                </div>
              </div>
            </div>
            <div id="clubJoin">
              <div id="clubInfo">
                <div id="clubText">
                  <h2>Join the club and get the benefits</h2>
                  <p>
                    Sign up for our newsletter and receive exclusive offers on
                    new ranges, sales, pop up stores and more
                  </p>
                </div>
                <div id="benefits">
                  <div>
                    <img src={tick}></img>
                    <p>Exclusive offers</p>
                  </div>
                  <div>
                    <img src={tick}></img>
                    <p>Free events</p>
                  </div>
                  <div>
                    <img src={tick}></img>
                    <p>Large discounts</p>
                  </div>
                </div>
              </div>
              <div id="email">
                <input placeholder="example@gmail.com"></input>
                <button>Sign Up</button>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      );
    } else {
      return <p>Loading</p>;
    }
  }
}

export default withParams(AddToCart);
