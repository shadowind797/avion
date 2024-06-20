import React from "react";
import Header from "./header";
import Footer from "./footer";
import Dropdown from "../hooks/dropdown.tsx"
import dropdownData from "../json/dropdown.json"

class Store extends React.Component {
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
              <Dropdown
                id=""
                title=""
                data={dropdownData}
                selectedId="1"
                onSelect={() => {}}
              />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Store;
