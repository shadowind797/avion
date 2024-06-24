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
      sort: {
        id: "1",
        name: "Cost",
      },
      sortSide: {
        id: "1",
        name: "Descending",
      },
    };

    this.handleSortSelect = this.handleSortSelect.bind(this);
    this.handleSortsideSelect = this.handleSortsideSelect.bind(this);
  }
  handleFilterChange = (newFilters) => {
    this.setState({ filters: newFilters });
  };
  handleSortSelect = (id) => {
    const selectedItem = dropdownData.find((item) => item.id === id);
    this.setState({ sort: selectedItem });
  };
  handleSortsideSelect = (id) => {
    const selectedItem = sortData.find((item) => item.id === id);
    this.setState({ sortSide: selectedItem });

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
                  selectedId={this.state.sort.id}
                  onSelect={this.handleSortSelect}
                />
                <Dropdown
                  id="2"
                  title=""
                  data={sortData}
                  selectedId={this.state.sortSide.id}
                  onSelect={this.handleSortsideSelect}
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
              <Products
                filters={this.state.filters}
                sort={this.state.sort}
                sortSide={this.state.sortSide}
              />
            </div>
          </div>
          <div id="loadMore">
            <button
              style={
                this.state.filterShow
                  ? { marginLeft: "255px" }
                  : { marginLeft: "0" }
              }
            >
              Load more
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Store;
