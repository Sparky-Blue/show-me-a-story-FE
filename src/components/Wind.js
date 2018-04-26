import React, { Component } from "react";
import Leaves from "./Leaves";
import "./styles/Leaves.css";

class Wind extends Component {
  state = { entering: true };
  componentDidMount() {
    setTimeout(this.toggle, 1000);
  }

  toggle = () => this.setState({ entering: !this.state.entering });

  render() {
    const leaves = new Array(21).fill();
    return leaves.map((leaf, index) => {
      return (
        <Leaves key={index} pose={this.state.entering ? "enter" : "exit"}>
          {index % 2 ? (
            <i className="fas fa-leaf" />
          ) : (
            <i className="fab fa-envira" />
          )}
        </Leaves>
      );
    });
  }
}

export default Wind;
