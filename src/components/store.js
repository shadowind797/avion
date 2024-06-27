import React from "react";
import { Link } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Dropdown from "../hooks/dropdown.tsx";
import Item from "./item";
import jsonItems from "../json/items.json";
import dropdownData from "../json/dropdownSort.json";
import sortData from "../json/dropdownSortSide.json";

class Store extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterShow: false,
      filters: [],
      itemsToRender: [],
      jsonItems: jsonItems.slice(0, 12),
      sort: {
        id: "1",
        name: "Cost",
      },
      sortSide: {
        id: "1",
        name: "Descending",
      },
      minCost: "",
      maxCost: "",
    };
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

  handleMinCostChange = (e) => {
    this.setState({ minCost: e.target.value });
    this.updateFilteredItems(e.target.value, this.state.maxCost);
  };

  handleMaxCostChange = (e) => {
    this.setState({ maxCost: e.target.value });
    this.updateFilteredItems(this.state.minCost, e.target.value);
  };

  updateFilteredItems = (minCost, maxCost) => {
    const { jsonItems } = this.state;
    const filteredItems = jsonItems.filter((item) => {
      const cost = item.cost;
      return (
        (minCost === "" || cost >= parseFloat(minCost)) &&
        (maxCost === "" || cost <= parseFloat(maxCost))
      );
    });
    this.setState({ itemsToRender: filteredItems.slice(0, 12) });
  };

  filterChange = (filter) => {
    if (!this.state.filters.includes(filter)) {
      this.setState({
        filters: [...this.state.filters, filter],
      });
    } else {
      this.setState({
        filters: this.state.filters.filter((f) => f !== filter),
      });
    }
  };

  componentDidMount() {
    const { jsonItems } = this.state;

    const value = this.props.search;
    if (this.props.search) {
      const searched = jsonItems.filter((item) =>
        item.name.toLowerCase().includes(value.split(" ")[0])
      );
      const moreSearched = searched.filter((item) =>
        item.name.toLowerCase().includes(value.split(" ")[1])
      );
      this.setState({ itemsToRender: moreSearched });
    }
  }

  render() {
    const { sort, sortSide, minCost, maxCost } = this.state;
    const { filters, jsonItems } = this.state;

    let afterSearch = jsonItems;
    const value = this.props.search;
    if (this.props.search) {
      if (value.includes(" ")) {
        const searched = jsonItems.filter((item) =>
          item.name.toLowerCase().includes(value.split(" ")[0])
        );
        const moreSearched = searched.filter((item) =>
          item.name.toLowerCase().includes(value.split(" ")[1])
        );
        afterSearch = moreSearched;
      } else {
        const searched = jsonItems.filter((item) =>
          item.name.toLowerCase().includes(value)
        );
        const moreSearched = searched.filter((item) =>
          item.name.toLowerCase().includes(value)
        );
        afterSearch = moreSearched;
      }
    }

    const filteredItems = afterSearch.filter((item) => {
      return filters.includes(item.type) || filters.includes(item.collection);
    });

    const postFilter =
      filters.length > 0
        ? filteredItems.slice(0, 12)
        : afterSearch.slice(0, 12);

    const filtered = postFilter.filter((item) => {
      const cost = item.cost;
      return (
        (minCost === "" || cost >= parseFloat(minCost)) &&
        (maxCost === "" || cost <= parseFloat(maxCost))
      );
    });

    if (sort.name === "Cost") {
      filtered.sort((a, b) =>
        sortSide.name === "Descending" ? b.cost - a.cost : a.cost - b.cost
      );
    } else if (sort.name === "Novelty") {
      filtered.sort((a, b) =>
        sortSide.name === "Descending"
          ? b.novetly - a.novetly
          : a.novetly - b.novetly
      );
    } else if (sort.name === "Name") {
      filtered.sort((a, b) =>
        sortSide.name === "Descending"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      );
    }

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
              <div id="filter">
                <div className="filterSection">
                  <h4>Product type</h4>
                  <ul>
                    <li onClick={() => this.filterChange("Furniture")}>
                      <input
                        type="checkbox"
                        className="custom-checkbox"
                      ></input>
                      <p>Furniture</p>
                    </li>
                    <li onClick={() => this.filterChange("Homeware")}>
                      <input type="checkbox" className="custom-checkbox" />
                      <p>Homeware</p>
                    </li>
                    <li onClick={() => this.filterChange("Sofas")}>
                      <input
                        type="checkbox"
                        className="custom-checkbox"
                      ></input>
                      <p>Sofas</p>
                    </li>
                    <li onClick={() => this.filterChange("Light")}>
                      <input
                        type="checkbox"
                        className="custom-checkbox"
                      ></input>
                      <p>Light fitting</p>
                    </li>
                    <li onClick={() => this.filterChange("Accesories")}>
                      <input
                        type="checkbox"
                        className="custom-checkbox"
                      ></input>
                      <p>Accesories</p>
                    </li>
                  </ul>
                </div>
                <div className="filterSection">
                  <h4>Cost</h4>
                  <div className="inputs">
                    <div>
                      <p>From:</p>
                      <div className="input">
                        <p>£</p>
                        <input
                          value={minCost}
                          onChange={this.handleMinCostChange}
                        ></input>
                      </div>
                    </div>
                    <div>
                      <p>To:</p>
                      <div className="input">
                        <p>£</p>
                        <input
                          value={maxCost}
                          onChange={this.handleMaxCostChange}
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="filterSection">
                  <h4>Collection</h4>
                  <ul>
                    <li onClick={() => this.filterChange("Moonlight")}>
                      <input
                        type="checkbox"
                        className="custom-checkbox"
                      ></input>
                      <p>Moonlight</p>
                    </li>
                    <li onClick={() => this.filterChange("Modern")}>
                      <input
                        type="checkbox"
                        className="custom-checkbox"
                      ></input>
                      <p>Modern</p>
                    </li>
                    <li onClick={() => this.filterChange("Vivo le France")}>
                      <input
                        type="checkbox"
                        className="custom-checkbox"
                      ></input>
                      <p>Vivo le France</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div id="products">
              <div id="productsDiv">
                {filtered.map((item) => (
                  <Link key={item.id} to={`/addtocart/${item.id}`}>
                    <Item item={item} updateItemId={this.updateItemId} />
                  </Link>
                ))}
              </div>
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
