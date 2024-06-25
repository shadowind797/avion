import React from "react";
import { Link } from "react-router-dom";
import photo1 from "../img/Photo1.png";
import photo2 from "../img/Photo2.png";
import photo3 from "../img/Photo3.png";
import photo4 from "../img/Photo4.png";
import photo5 from "../img/Photo5.png";
import photo6 from "../img/Photo6.png";
import photo7 from "../img/Photo7.png";
import photo8 from "../img/Photo8.png";
import photo9 from "../img/Photo9.png";


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchShow: false,
    };
  }
  render() {
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
      <header>
        <div id="headerUp">
          <Link to="/">
            <h1>Avion</h1>
          </Link>
          <div id="upheaderbtns">
            <div id="headerLinks">
              <ul>
                <Link to="/about">
                  <li>About Us</li>
                </Link>
                <Link to="/store">
                  <li>Store</li>
                </Link>
                <li>Blog</li>
              </ul>
            </div>
            <div id="options">
              <div
                id="search"
                typeof="submit"
                onClick={() =>
                  this.setState((prevState) => ({
                    searchShow: !prevState.searchShow,
                  }))
                }
              ></div>
              <Link to="/cart">
                <div id="cart"></div>
              </Link>
              <div id="profile"></div>
            </div>
          </div>
        </div>
        <div id="headerDown">
          <nav>
            <ul>
              <li>Plant pots</li>
              <li>Ceramics</li>
              <li>Tables</li>
              <li>Chairs</li>
              <li>Crockery</li>
              <li>Tableware</li>
              <li>Cutlery</li>
            </ul>
          </nav>
          <div
            id="searchInput"
            style={
              this.state.searchShow === false
                ? { display: "none" }
                : { display: "flex" }
            }
          >
            <button
              id="closeSearch"
              onClick={() => {
                this.setState({ searchShow: false });
              }}
            ></button>
            <button id="searchBtn">Search</button>
            <input placeholder="Input furniture name or type"></input>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
