import React from "react";
import Header from "./header";
import Footer from "./footer";
import Slider from "./slider";

class Home extends React.Component {
  componentDidMount() {
    const $slider = document.getElementById("slider");
    if ($slider) {
      const slider = new Slider($slider, {
        loop: true,
        autoplay: false,
        interval: 5000,
        pauseOnHover: true,
        refresh: true,
        swipe: true,
      });
    }
  }
  render() {
    return (
      <div>
        <Header />
        <main>
          <div id="mainDiv">
            <div  id="collectionAd">
              <div>
                <h2>
                  Luxury homeware for people who love timeless design quality
                </h2>
                <p>Shop the new Spring 2024 collection today</p>
              </div>
              <button>View collection</button>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Home;
