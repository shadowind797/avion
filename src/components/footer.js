import React from "react";
import linkedin from "../img/Logo--linkedin.svg";
import facebook from "../img/Logo--facebook.svg";
import instagram from "../img/Logo--instagram.svg";
import skype from "../img/Logo--skype.svg";
import twitter from "../img/Logo--twitter.svg";
import pinterest from "../img/Logo--pinterest.svg";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div id="footerUp">
          <div id="links">
            <div>
              <h3>Menu</h3>
              <ul>
                <li>New arrivals</li>
                <li>Best sellers</li>
                <li>Recently viewed</li>
                <li>Popular this week</li>
                <li>All products</li>
              </ul>
            </div>
            <div>
              <h3>Categories</h3>
              <ul>
                <li>Crockery</li>
                <li>Furniture</li>
                <li>Homeware</li>
                <li>Plant pots</li>
                <li>Chairs</li>
              </ul>
            </div>
            <div>
              <h3>Our company</h3>
              <ul>
                <li>About us</li>
                <li>Vacancies</li>
                <li>Contact us</li>
                <li>Privacy</li>
                <li>Returns policy</li>
              </ul>
            </div>
          </div>
          <div id="joinMail">
            <h3>Join our mailing list</h3>
            <div>
              <input placeholder="example@gmail.com"></input>
              <button>Sign Up</button>
            </div>
          </div>
        </div>
        <div id="footerDown">
          <div id="copy">
            <p>Made by shadowind in 2024</p>
          </div>
          <div id="socials">
            <img src={linkedin}></img>
            <img src={facebook}></img>
            <img src={instagram}></img>
            <img src={skype}></img>
            <img src={twitter}></img>
            <img src={pinterest}></img>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
