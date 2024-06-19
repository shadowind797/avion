import React from "react";
import Header from "./header";
import Footer from "./footer";
import delivery from "../img/Delivery.svg";
import checkmark from "../img/Checkmark-outline.svg";
import purschase from "../img/Purchase.svg";
import recycle from "../img/Sprout.svg";
import about1 from "../img/about1.png";
import about2 from "../img/about2.png";

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
          <div id="aboutPar1" className="container">
            <div id="aboutPar1Text">
              <div id="aboutInfo1">
                <h2>
                  From a studio in London to a global brand with over 400
                  outlets
                </h2>
                <div>
                  <p>
                    When we started Avion, the idea was simple. Make high
                    quality furniture affordable and available for the mass
                    market.
                  </p>
                  <p>
                    Handmade, and lovingly crafted furniture and homeware is
                    what we live, breathe and design so our Chelsea boutique
                    become the hotbed for the London interior design community.
                  </p>
                </div>
              </div>
              <button>Get in touch</button>
            </div>
            <div id="aboutImg1">
              <img src={about1}></img>
            </div>
          </div>
          <div id="aboutPar2" className="container">
            <div id="aboutImg2">
              <img src={about2}></img>
            </div>
            <div id="aboutPar2Text">
              <div id="aboutInfo2">
                <h2>
                  Our service isn't just personal, it's actually hyper
                  personally exquisite
                </h2>
                <div>
                  <p>
                    When we started Avion, the idea was simple. Make high
                    quality furniture affordable and available for the mass
                    market.
                  </p>
                  <p>
                    Handmade, and lovingly crafted furniture and homeware is
                    what we live, breathe and design so our Chelsea boutique
                    become the hotbed for the London interior design community.
                  </p>
                </div>
              </div>
              <button>Get in touch</button>
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
        </main>
        <Footer />
      </div>
    );
  }
}

export default About;
