import React, { Component } from "react";
import Blizz from "./posed/Blizz.js";
import "./styles/Rain.css";

class Blizzard extends Component {
  state = { entering: true };
  componentDidMount() {
    setTimeout(this.toggle, 1000);
  }

  toggle = () => this.setState({ entering: !this.state.entering });

  render() {
    const rain = new Array(170).fill();
    return rain.map((blizz, index) => {
      return (
        <Blizz key={index} pose={this.state.entering ? "enter" : "exit"}>
          {index % 3 ? (
            <i className="fas fa-circle" />
          ) : (
            <i className="far fa-snowflake small" />
          )}
        </Blizz>
      );
    });
  }
}

export default Blizzard;
