import React, { Component } from "react";
import Clouds from "./posed/Clouds";
import "./styles/Clouds.css";

class Cloud extends Component {
  state = { entering: true };
  componentDidMount() {
    setTimeout(this.toggle, 1000);
  }

  toggle = () => this.setState({ entering: !this.state.entering });

  render() {
    const clouds = new Array(180).fill();
    return clouds.map((cloud, index) => {
      return (
        <Clouds key={index} pose={this.state.entering ? "enter" : "exit"}>
          <i className="fas fa-cloud" />
        </Clouds>
      );
    });
  }
}

export default Cloud;
