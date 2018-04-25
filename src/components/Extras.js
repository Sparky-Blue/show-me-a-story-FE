import React, { Component, Fragment } from "react";
import "./styles/Extras.css";
import Extra from "./Extra";
import { PoseGroup } from "react-pose";

class Extras extends Component {
  state = { entering: true };
  componentDidMount() {
    setTimeout(this.toggle, 1000);
  }

  toggle = () => this.setState({ entering: !this.state.entering });

  render() {
    return (
      <PoseGroup>
        {this.props.things.map((thing, i) => {
          return (
            <Extra
              className="extra"
              key={i}
              pose={this.state.entering ? "up" : "down"}
            >
              <img className="extra" src={thing} alt="thing" />
            </Extra>
          );
        })}
      </PoseGroup>
    );
  }
}

export default Extras;
