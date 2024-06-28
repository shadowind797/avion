import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchShow: false,
      inputValue: "",
    };
    this.searchInputRef = React.createRef();
  }

  componentDidMount() {
    if (this.state.searchShow) {
      this.searchInputRef.current.focus();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchShow !== prevState.searchShow) {
      if (this.state.searchShow) {
        this.searchInputRef.current.focus();
      }
    }
  }

  handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    this.setState({ inputValue: value });
  };

  render() {
    const { inputValue } = this.state;
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
            <form>
              <input
                placeholder="Search by name"
                value={inputValue}
                onChange={this.handleInputChange}
                id="search"
                ref={this.searchInputRef}
                autoComplete="off"
              ></input>
              <Link to={`/store/search/${inputValue}`}>
                <button
                  type="submit"
                  id="searchBtn"
                  onClick={() => {
                    this.setState({ searchShow: false });
                  }}
                >
                  Search
                </button>
              </Link>
            </form>
            <button
              id="closeSearch"
              onClick={() => {
                this.setState({ searchShow: false });
              }}
            ></button>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
