import React from "react";
import Item from "./item";
import jsonItems from "../json/items.json";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.filtered = [];
  }
  render() {
    const { filters } = this.props;

    const allowedTypes = this.props.filters;

    const filteredItems = jsonItems.filter((item) => {
      return (
        allowedTypes.includes(item.type) ||
        allowedTypes.includes(item.collection)
      );
    });

    const itemsToRender =
      filters.length > 0 ? filteredItems.slice(0, 12) : jsonItems.slice(0, 12);
    return (
      <div id="productsDiv">
        {itemsToRender.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    );
  }
}

export default Products;
