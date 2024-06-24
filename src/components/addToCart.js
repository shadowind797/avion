import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
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

function AddToCart() {
  const firstFourItems = jsonItems.slice(0, 4);
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
  return (
    <div id="addtocart">
      <Header />
      <main>
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
                          <Item item={item} />
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
                          <Item item={item} />
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
                          <Item item={item} />
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
