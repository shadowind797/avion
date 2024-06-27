import React, { Component } from "react";
import { Link } from "react-router-dom";
import Item from "./item";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsToRender: [],
    };
  }

  componentDidMount() {
    const { filters, jsonItems } = this.props;
    const allowedTypes = filters;

    const filteredItems = jsonItems.filter((item) => {
      return (
        allowedTypes.includes(item.type) ||
        allowedTypes.includes(item.collection)
      );
    });

    let itemsToRender =
      filters.length > 0 ? filteredItems.slice(0, 12) : jsonItems.slice(0, 12);
    const value = this.props.search;

    if (this.props.search) {
      const searched = itemsToRender.filter((item) =>
        item.name.toLowerCase().includes(value.split(" ")[0])
      );
      const moreSearched = searched.filter((item) =>
        item.name.toLowerCase().includes(value.split(" ")[1])
      );
      itemsToRender = moreSearched;
    }

    this.setState({ itemsToRender });
  }

  render() {
    const { sort, sortSide } = this.props;
    const { itemsToRender } = this.state;

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
      <div id="productsDiv">
        {itemsToRender.map((item) => (
          <Link key={item.id} to={`/addtocart/${item.id}`}>
            <Item item={item} updateItemId={this.updateItemId} />
          </Link>
        ))}
      </div>
    );
  }
}

export default Products;
