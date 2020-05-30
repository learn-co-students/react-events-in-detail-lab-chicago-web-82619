// Code CoordinatesButton Component Here
import React, { Component } from "react";

export class CoordinatesButton extends Component {
  handleClick = (event) => {
    const coordinates = [];
    coordinates.push(event.clientX);
    coordinates.push(event.clientY);
    this.props.onReceiveCoordinates(coordinates);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Hello</button>
      </div>
    );
  }
}

export default CoordinatesButton;
