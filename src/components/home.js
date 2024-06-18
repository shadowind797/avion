import React from "react";
import Header from "./header";
import Footer from "./footer";
import Slider from "./slider";
import Item from "../components/item";
import jsonItems from "../json/items.json";
import delivery from "../img/Delivery.svg";
import checkmark from "../img/Checkmark-outline.svg";
import purschase from "../img/Purchase.svg";
import recycle from "../img/Sprout.svg";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const $slider = document.getElementById("slider");
    if ($slider) {
      const slider = new Slider($slider, {
        loop: true,
        autoplay: true,
        interval: 20000, //ms
        pauseOnHover: true,
        refresh: true,
        swipe: true,
      });
    }
  }
  render() {
    const firstFourItems = jsonItems.slice(0, 4);
    return (
      <div>
        <Header />
        <main>
          <div id="mainDiv">
            <div id="collectionAd">
              <div>
                <h2>
                  Luxury homeware for people who love timeless design quality
                </h2>
                <p>Shop the new Spring 2024 collection today</p>
              </div>
              <button>View collection</button>
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
                  We use 100% recycled to ensure our footprint is more
                  manageable
                </p>
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
        </main>
      </div>
    );
  }
}

export default Home;
