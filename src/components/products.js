import React from "react";
import Item from "./item";
import jsonItems from "../json/items.json";

class Products extends React.Component {
  render() {
    const firstItems = jsonItems.slice(0, 12);
    return (
      <div id="productsDiv">
        {firstItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    );
  }
}

export default Products;
