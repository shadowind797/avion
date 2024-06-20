import React from "react";
import Header from "./header";
import Footer from "./footer";
import Dropdown from "../hooks/dropdown.tsx";
import dropdownData from "../json/dropdown.json";

class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortShow: false,
    };
  }
  render() {
    return (
      <div id="store">
        <Header />
        <main>
          <div id="storeTitle">
            <h1>Our products</h1>
          </div>
          <div id="storeHead">
            <a>Filters</a>
            <div id="nav">
              <div
                id="sort"
                onClick={this.setState((prevState) => ({
                  sortShow: !prevState.sortShow,
                }))}
              >
                <Dropdown
                  id=""
                  title=""
                  // show={this.state.sortShow}
                  data={dropdownData}
                  selectedId="1"
                  onSelect={() => {}}
                />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Store;
