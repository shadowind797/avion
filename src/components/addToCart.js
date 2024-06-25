import React from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Slider from "./slider";
import Item from "../components/item";
import jsonItems from "../json/items.json";
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

function AddToCart() {
  const { itemId } = useParams();

  useEffect(() => {
    const $slider = document.getElementById("slider");
    if ($slider) {
      const slider = new Slider($slider, {
        loop: true,
        autoplay: true,
        interval: 10000, //ms
        pauseOnHover: true,
        refresh: true,
        swipe: true,
      });
    }
  }, []);

  const firstFourItems = jsonItems.slice(0, 4);
  const item = jsonItems.find((i) => i.id == itemId);
  const { img, name, cost, description, dimensions } = item;

  const setImg = (img) => {
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
  };

  return (
    <div id="addtocart">
      <Header />
      <main>
        <div id="cartadd">
          <div id="addImg">
            <img src={setImg(img)}></img>
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
              <div>
                <div>
                  <h4>Height</h4>
                  <p>{dimensions.h}</p>
                </div>
                <div>
                  <h4>Width</h4>
                  <p>{dimensions.w}</p>
                </div>
                <div>
                  <h4>Depth</h4>
                  <p>{dimensions.d}</p>
                </div>
              </div>
            </div>
            <div id="addQuant">
              <h3>Quantitity</h3>
              <div>
                <p>1</p> {"//////////////////////////////////////////////////////////////add var"}
              </div>
            </div>
            <div id="add">
              <button id="addBtn">Add to cart</button>
              <button id="favSaveBtn">Save to favorites</button>
            </div>
          </div>
        </div>
        <div
          className="slider_style"
          data-slider="chiefslider"
          data-infinite="false"
          data-autoplay="false"
          id="slider"
        >
          <div className="slider__container">
            <div className="slider__wrapper">
              <div className="slider__items">
                <div className="slider__item">
                  <div className="slider__item-container">
                    <div className="slider__item-content">
                      <div>
                        {firstFourItems.map((item) => (
                          <Link key={item.id} to={`/addtocart/${item.id}`}>
                            <Item key={item.id} item={item} />
                          </Link>
                        ))}
                      </div>
                      <button>View collection</button>
                    </div>
                  </div>
                </div>
                <div className="slider__item">
                  <div className="slider__item-container">
                    <div className="slider__item-content">
                      <div>
                        {firstFourItems.map((item) => (
                          <Link key={item.id} to={`/addtocart/${item.id}`}>
                            <Item key={item.id} item={item} />
                          </Link>
                        ))}
                      </div>
                      <button>View collection</button>
                    </div>
                  </div>
                </div>
                <div className="slider__item">
                  <div className="slider__item-container">
                    <div className="slider__item-content">
                      <div>
                        {firstFourItems.map((item) => (
                          <Link key={item.id} to={`/addtocart/${item.id}`}>
                            <Item key={item.id} item={item} />
                          </Link>
                        ))}
                      </div>
                      <button>View collection</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                Handmade crafted goods made with real passion and craftmanship
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
                We use 100% recycled to ensure our footprint is more manageable
              </p>
            </div>
          </div>
        </div>
        <div id="clubJoin">
          <div id="clubInfo">
            <div id="clubText">
              <h2>Join the club and get the benefits</h2>
              <p>
                Sign up for our newsletter and receive exclusive offers on new
                ranges, sales, pop up stores and more
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
}

export default AddToCart;
