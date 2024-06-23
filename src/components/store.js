import React from "react";
import Header from "./header";
import Footer from "./footer";
import Dropdown from "../hooks/dropdown.tsx";
import Filter from "./filter.js";
import Products from "./products.js";
import dropdownData from "../json/dropdownSort.json";
import sortData from "../json/dropdownSortSide.json";

class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterShow: false,
      filters: [],
    };
  }
  handleFilterChange = (newFilters) => {
    this.setState({ filters: newFilters });
  };
  render() {
    return (
      <div id="store">
        <Header />
        <main>
          <div id="storeTitle">
            <h1>Our products</h1>
          </div>
          <div id="storeHead">
            <button
              id="filterBtn"
              onClick={() =>
                this.setState((prevState) => ({
                  filterShow: !prevState.filterShow,
                }))
              }
            >
              Filters
            </button>
            <div id="nav">
              <div id="sort">
                <p>Sorting by:</p>
                <Dropdown
                  id="1"
                  title=""
                  data={dropdownData}
                  selectedId="1"
                  onSelect={() => {}}
                />
                <Dropdown
                  id="2"
                  title=""
                  data={sortData}
                  selectedId="1"
                  onSelect={() => {}}
                />
              </div>
            </div>
          </div>
          <div id="filter-store">
            <div
              id="filterDiv"
              style={
                this.state.filterShow
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <Filter
                filters={this.state.filters}
                onChange={this.handleFilterChange}
              />
            </div>
            <div id="products">
              <Products filters={this.state.filters} />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Store;
