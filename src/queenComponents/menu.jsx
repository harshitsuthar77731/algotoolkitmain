import React, { Component } from "react";
import DiscreteSlider from "./slider";

class Menu extends Component {
  render() {
    return (
      <nav className="nav alert-dark">
        <DiscreteSlider
          default={4}
          min={1}
          max={8}
          step={1}
          title="Grid size"
          onCountChange={this.props.onCountChange}
          disable={this.props.disable}
        />
        <DiscreteSlider
          default={50}
          min={1}
          max={100}
          step={1}
          title="Speed"
          onCountChange={this.props.onSpeedChange}
        />

        <button
          className="btn btn-success btn-lg "
          onClick={this.props.onViusalize}
          disabled={this.props.disable}
          style={this.isClickable()}
        >
          Start
        </button>
        <button
          className="btn btn-secondary m-2 btn-lg "
          onClick={this.props.onClear}
          disabled={this.props.disable}
          style={this.isClickable()}
        >
          Restart
        </button>
      </nav>
    );
  }
  isClickable = () => {
    if (this.props.disable) {
      return { cursor: "not-allowed" };
    } else {
      return {};
    }
  };
}

export default Menu;
