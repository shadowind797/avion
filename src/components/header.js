import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchShow: false,
    };
  }
  render() {
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
                <li>Contact</li>
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
              <div id="cart"></div>
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
