import React from "react";
import Item from "./item";
import jsonItems from "../json/items.json";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.filtered = [];
  }
  render() {
    const firstItems = jsonItems.slice(0, 12);
    return (
      <div id="productsDiv">
        {this.props.filters.length === 0
          ? firstItems.map((item) => <Item key={item.id} item={item} />)
          : null}
      </div>
    );
  }
}

export default Products;
