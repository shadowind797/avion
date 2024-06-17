import React from "react";

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
          <div
            id="search"
            typeof="submit"
            onClick={() => {
              this.setState({ searchShow: true });
            }}
            style={
              this.state.searchShow === false ? { opacity: 1 } : { opacity: 0 }
            }
          ></div>
          <div
            id="searchInput"
            style={
              this.state.searchShow === false
                ? { display: "none" }
                : { display: "flex" }
            }
          >
            <input placeholder="Input furniture name or type"></input>
            <button id="searchBtn">Search</button>
            <button
              id="closeSearch"
              onClick={() => {
                this.setState({ searchShow: false });
              }}
            ></button>
          </div>
          <h1>Avion</h1>
          <div id="options">
            <div id="cart"></div>
            <div id="profile"></div>
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
        </div>
      </header>
    );
  }
}

export default Header;
