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
      </div>
    );
  }
}

export default Home;
