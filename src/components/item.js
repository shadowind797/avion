import React from "react";
import photo1 from "../img/Photo1.png"
import photo2 from "../img/Photo2.png"
import photo3 from "../img/Photo3.png"
import photo4 from "../img/Photo4.png"
import photo5 from "../img/Photo5.png"
import photo6 from "../img/Photo6.png"
import photo7 from "../img/Photo7.png"
import photo8 from "../img/Photo8.png"
import photo9 from "../img/Photo9.png"

class Item extends React.Component {
  render() {
    const { img, name, cost } = this.props.item;

    const setImg = (img) => {
      if (img === "img/Photo1.png") {
        const imgPath = photo1;
        return imgPath;
      } else if (img === "img/Photo2.png") {
        const imgPath = photo2;
        return imgPath;
      } else if (img === "img/Photo3.png") {
        const imgPath = photo3;
        return imgPath;
      } else if (img === "img/Photo4.png") {
        const imgPath = photo4;
        return imgPath;
      } else if (img === "img/Photo5.png") {
        const imgPath = photo5;
        return imgPath;
      } else if (img === "img/Photo6.png") {
        const imgPath = photo6;
        return imgPath;
      } else if (img === "img/Photo7.png") {
        const imgPath = photo7;
        return imgPath;
      } else if (img === "img/Photo8.png") {
        const imgPath = photo8;
        return imgPath;
      } else if (img === "img/Photo9.png") {
        const imgPath = photo9;
        return imgPath;
      }
    };

    return (
      <div className="item">
        <img src={setImg(img)} alt={name} />
        <div>
          <h2>{name}</h2>
          <p>£{cost}</p>
        </div>
      </div>
    );
  }
}

export default Item;
