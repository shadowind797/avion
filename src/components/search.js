import { React, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Dropdown from "../hooks/dropdown.tsx";
import Filter from "./filter.js";
import Products from "./products.js";
import jsonItems from "../json/items.json";
import dropdownData from "../json/dropdownSort.json";
import sortData from "../json/dropdownSortSide.json";

const Search = () => {
  const { searchStr } = useParams();

  const [filterShow, setFilterShow] = useState(false);
  const [filters, setFilters] = useState([]);
  const [sort, setSort] = useState({ id: "1", name: "Cost" });
  const [sortSide, setSortSide] = useState({ id: "1", name: "Descending" });

  const [items, setItems] = useState(jsonItems);
  const [filteredItems, setFilteredItems] = useState([]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSortSelect = (id) => {
    const selectedItem = dropdownData.find((item) => item.id === id);
    setSort(selectedItem);
  };

  const handleSortsideSelect = (id) => {
    const selectedItem = sortData.find((item) => item.id === id);
    setSortSide(selectedItem);
  };

  const handleUpdateFilteredItems = (filteredItems) => {
    setFilteredItems(filteredItems);
  };

  return (
    <div id="store">
      <Header />
      <main>
        <div id="storeTitle">
          <h1>Our products</h1>
        </div>
        <div id="storeHead">
          <button id="filterBtn" onClick={() => setFilterShow((prev) => !prev)}>
            Filters
          </button>
          <div id="nav">
            <div id="sort">
              <p>Sorting by:</p>
              <Dropdown
                id="1"
                title=""
                data={dropdownData}
                selectedId={sort.id}
                onSelect={handleSortSelect}
              />
              <Dropdown
                id="2"
                title=""
                data={sortData}
                selectedId={sortSide.id}
                onSelect={handleSortsideSelect}
              />
            </div>
          </div>
        </div>
        <div id="filter-store">
          <div
            id="filterDiv"
            style={filterShow ? { display: "block" } : { display: "none" }}
          >
            <Filter
              filters={filters}
              onChange={handleFilterChange}
              items={items}
              onUpdateFilteredItems={handleUpdateFilteredItems}
            />
          </div>
          <div id="products">
            <Products
              filters={filters}
              sort={sort}
              sortSide={sortSide}
              search={searchStr}
              jsonItems={filteredItems}
            />
          </div>
        </div>
        <div id="loadMore">
          <button
            style={filterShow ? { marginLeft: "255px" } : { marginLeft: "0" }}
          >
            Load more
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
