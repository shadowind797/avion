import React from "react";
import { Link } from "react-router-dom";
import Item from "./item";
import jsonItems from "../json/items.json";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.filtered = [];
  }
  render() {
    const { filters, sort, sortSide } = this.props;

    const allowedTypes = this.props.filters;

    const filteredItems = jsonItems.filter((item) => {
      return (
        allowedTypes.includes(item.type) ||
        allowedTypes.includes(item.collection)
      );
    });

    const itemsToRender =
      filters.length > 0 ? filteredItems.slice(0, 12) : jsonItems.slice(0, 12);

    if (sort.name === "Cost" && sortSide.name === "Descending") {
      itemsToRender.sort((a, b) => b.cost - a.cost);
    } else if (sort.name === "Cost" && sortSide.name === "Ascending") {
      itemsToRender.sort((a, b) => a.cost - b.cost);
    } else if (sort.name === "Novelty" && sortSide.name === "Descending") {
      itemsToRender.sort((a, b) => b.novetly - a.novetly);
    } else if (sort.name === "Novelty" && sortSide.name === "Ascending") {
      itemsToRender.sort((a, b) => a.novetly - b.novetly);
    } else if (sort.name === "Name" && sortSide.name === "Descending") {
      itemsToRender.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort.name === "Name" && sortSide.name === "Ascending") {
      itemsToRender.sort((a, b) => b.name.localeCompare(a.name));
    }
    return (
      <Link to="/addtocart">
        <div id="productsDiv">
          {itemsToRender.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      </Link>
    );
  }
}

export default Products;
