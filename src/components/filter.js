import React from "react";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minCost: "",
      maxCost: "",
    };
  }
  handleChange = (newFilters) => {
    this.props.onChange(newFilters);
  };

  handleMinCostChange = (e) => {
    this.setState({ minCost: e.target.value });
    this.updateFilteredItems(e.target.value, this.state.maxCost);
  };

  handleMaxCostChange = (e) => {
    this.setState({ maxCost: e.target.value });
    this.updateFilteredItems(this.state.minCost, e.target.value);
  };

  updateFilteredItems = (minCost, maxCost) => {
    const { items, onUpdateFilteredItems } = this.props;
    const filteredItems = items.filter((item) => {
      const cost = item.cost;
      return (
        (minCost === "" || cost >= parseFloat(minCost)) &&
        (maxCost === "" || cost <= parseFloat(maxCost))
      );
    });
    onUpdateFilteredItems(filteredItems);
  };
  render() {
    const { minCost, maxCost } = this.state;
    return (
      <div id="filter">
        <div className="filterSection">
          <h4>Product type</h4>
          <ul>
            <li
              onClick={() => {
                if (!this.props.filters.includes("Furniture")) {
                  this.props.filters.push("Furniture");
                  this.handleChange(this.props.filters);
                } else {
                  const updatedFilters = this.props.filters.filter(
                    (item) => item !== "Furniture"
                  );
                  this.handleChange(updatedFilters);
                }
              }}
            >
              <input type="checkbox" className="custom-checkbox"></input>
              <p>Furniture</p>
            </li>
            <li
              onClick={() => {
                if (!this.props.filters.includes("Homeware")) {
                  this.props.filters.push("Homeware");
                  this.handleChange(this.props.filters);
                } else {
                  const updatedFilters = this.props.filters.filter(
                    (item) => item !== "Homeware"
                  );
                  this.handleChange(updatedFilters);
                }
              }}
            >
              <input type="checkbox" className="custom-checkbox"></input>
              <p>Homeware</p>
            </li>
            <li
              onClick={() => {
                if (!this.props.filters.includes("Sofas")) {
                  this.props.filters.push("Sofas");
                  this.handleChange(this.props.filters);
                } else {
                  const updatedFilters = this.props.filters.filter(
                    (item) => item !== "Sofas"
                  );
                  this.handleChange(updatedFilters);
                }
              }}
            >
              <input type="checkbox" className="custom-checkbox"></input>
              <p>Sofas</p>
            </li>
            <li
              onClick={() => {
                if (!this.props.filters.includes("Light")) {
                  this.props.filters.push("Light");
                  this.handleChange(this.props.filters);
                } else {
                  const updatedFilters = this.props.filters.filter(
                    (item) => item !== "Light"
                  );
                  this.handleChange(updatedFilters);
                }
              }}
            >
              <input type="checkbox" className="custom-checkbox"></input>
              <p>Light fitting</p>
            </li>
            <li
              onClick={() => {
                if (!this.props.filters.includes("Accesories")) {
                  this.props.filters.push("Accesories");
                  this.handleChange(this.props.filters);
                } else {
                  const updatedFilters = this.props.filters.filter(
                    (item) => item !== "Accesories"
                  );
                  this.handleChange(updatedFilters);
                }
              }}
            >
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
                <input
                  value={minCost}
                  onChange={this.handleMinCostChange}
                ></input>
              </div>
            </div>
            <div>
              <p>To:</p>
              <div className="input">
                <p>£</p>
                <input
                  value={maxCost}
                  onChange={this.handleMaxCostChange}
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className="filterSection">
          <h4>Collection</h4>
          <ul>
            <li
              onClick={() => {
                if (!this.props.filters.includes("Moonlight")) {
                  this.props.filters.push("Moonlight");
                  this.handleChange(this.props.filters);
                } else {
                  const updatedFilters = this.props.filters.filter(
                    (item) => item !== "Moonlight"
                  );
                  this.handleChange(updatedFilters);
                }
              }}
            >
              <input type="checkbox" className="custom-checkbox"></input>
              <p>Moonlight</p>
            </li>
            <li
              onClick={() => {
                if (!this.props.filters.includes("Modern")) {
                  this.props.filters.push("Modern");
                  this.handleChange(this.props.filters);
                } else {
                  const updatedFilters = this.props.filters.filter(
                    (item) => item !== "Modern"
                  );
                  this.handleChange(updatedFilters);
                }
              }}
            >
              <input type="checkbox" className="custom-checkbox"></input>
              <p>Modern</p>
            </li>
            <li
              onClick={() => {
                if (!this.props.filters.includes("Vivo le France")) {
                  this.props.filters.push("Vivo le France");
                  this.handleChange(this.props.filters);
                } else {
                  const updatedFilters = this.props.filters.filter(
                    (item) => item !== "Vivo le France"
                  );
                  this.handleChange(updatedFilters);
                }
              }}
            >
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
