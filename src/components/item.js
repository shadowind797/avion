import React from "react";

class Item extends React.Component {
  render() {
    const { img, name, cost } = this.props.item;
    const imgPath = process.env.PUBLIC_URL + img;
    return (
      <div className="item">
        <img src={imgPath} />
        <div>
          <h2>{name}</h2>
          <p>£{cost}</p>
        </div>
      </div>
    );
  }
}

export default Item;