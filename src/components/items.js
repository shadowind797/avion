import React from "react";
import Item from "./item";

class Items extends React.Component {
  render() {
    return (
      <div>
        {this.props.items.map((el) => (
          <Item
            key={el.id}
            user={el}
          />
        ))}
      </div>
    );
  }
}

export default Items;
