import React from "react";
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5";

class User extends React.Component {
  constructor(props) {
    super(props);
  }
  item = this.props.item;
  render() {
    return (
      <div className="item">
        <img src={this.item.img} />
        <h2>
          {this.item.name}
        </h2>
        <p>£{this.item.cost}</p>
      </div>
    );
  }
}

export default User;
