import React from "react";
import Header from "./header";
import Footer from "./footer";
import delivery from "../img/Delivery.svg";
import checkmark from "../img/Checkmark-outline.svg";
import purschase from "../img/Purchase.svg";
import recycle from "../img/Sprout.svg";

class About extends React.Component {
  render() {
    return (
      <div id="about">
        <Header />
        <main>
          <div id="aboutHeader">
            <h1>
              A brand built on the love of craftmanship, quality and outstanding
              customer service
            </h1>
          </div>
          <div id="aboutPar1"></div>
          <div id="aboutPar2"></div>
          <div id="delivery"></div>
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
        </main>
        <Footer />
      </div>
    );
  }
}

export default About;
