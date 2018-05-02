import React, { Component } from "react";
import Raindrop from "./posed/Raindrop";
import "./styles/Rain.css";

class Rain extends Component {
  state = { entering: true };
  componentDidMount() {
    setTimeout(this.toggle, 1000);
  }

  toggle = () => this.setState({ entering: !this.state.entering });

  render() {
    const rain = new Array(250).fill();
    return rain.map((raindrop, index) => {
      return (
        <Raindrop key={index} pose={this.state.entering ? "enter" : "exit"}>
          <i className="fas fa-tint" />
        </Raindrop>
      );
    });
  }
}

export default Rain;
