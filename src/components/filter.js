import React from "react";

class Filter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="filter">
        <div className="filterSection">
          <h4>Product type</h4>
          <ul>
            <li>
              <input type="checkbox" className="custom-checkbox"></input>
              <p>Furniture</p>
            </li>
            <li>
              <input type="checkbox" className="custom-checkbox"></input>
              <p>Homeware</p>
            </li>
            <li>
              <input type="checkbox" className="custom-checkbox"></input>
              <p>Sofas</p>
            </li>
            <li>
              <input type="checkbox" className="custom-checkbox"></input>
              <p>Light fitting</p>
            </li>
            <li>
              <input type="checkbox" className="custom-checkbox"></input>
              <p>Accesories</p>
            </li>
          </ul>
        </div>
        <div className="filterSection">
          <h4>Cost</h4>
          <div className="inputs">
            <div>
              <p>From:</p>
              <div className="input">
                <p>£</p>
                <input></input>
              </div>
            </div>
            <div>
              <p>To:</p>
              <div className="input">
                <p>£</p>
                <input></input>
              </div>
            </div>
          </div>
        </div>
        <div className="filterSection">
          <h4>Collection</h4>
          <ul>
            <li>
              <input type="checkbox" className="custom-checkbox"></input>
              <p>Moonlight</p>
            </li>
            <li>
              <input type="checkbox" className="custom-checkbox"></input>
              <p>Modern</p>
            </li>
            <li>
              <input type="checkbox" className="custom-checkbox"></input>
              <p>Vivo le France</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Filter;
