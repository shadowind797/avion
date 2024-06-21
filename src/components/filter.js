import React from "react";

class Filter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="filter">
        <div>
          <h4></h4>
          <ul>
            <li>
              <input type="checkbox"></input>
              <p></p>
            </li>
            <li>
              <input></input>
              <p></p>
            </li>
            <li>
              <input></input>
              <p></p>
            </li>
            <li>
              <input></input>
              <p></p>
            </li>
            <li>
              <input></input>
              <p></p>
            </li>
            <li>
              <input></input>
              <p></p>
            </li>
          </ul>
        </div>
        <div>
          <h4></h4>
          <div>
            <div>
              <p></p>
              <input></input>
            </div>
            <div>
              <p></p>
              <input></input>
            </div>
          </div>
        </div>
        <div>
          <h4></h4>
          <ul>
            <li>
              <input type="checkbox"></input>
              <p></p>
            </li>
            <li>
              <input></input>
              <p></p>
            </li>
            <li>
              <input></input>
              <p></p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Filter;
