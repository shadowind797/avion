import React from "react";
import { Link } from "react-router-dom";
import items from "../json/items.json";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchShow: false,
      inputValue: "",
      filteredData: items,
    };
  }

  handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    let filtered = items.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    this.setState({ filteredData: filtered, inputValue: value });
  };

  render() {
    const { inputValue, filteredData } = this.state;
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
            <Link to={`/search/${inputValue}`}>
              <button
                id="searchBtn"
                onClick={() => {
                  this.setState({ searchShow: false });
                }}
              >
                Search
              </button>
            </Link>
            <input
              placeholder="Input furniture name or type"
              value={inputValue}
              onChange={this.handleInputChange}
            ></input>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
