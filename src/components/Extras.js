import React, { Component, Fragment } from "react";
import "./styles/Extras.css";
import Extra from "./Extra";
import posed, { PoseGroup } from "react-pose";
//import "./styles/Extra.css";

import { spring, tween } from "popmotion";

class Extras extends Component {
  state = { entering: true };
  componentDidMount() {
    setTimeout(this.toggle, 1000);
  }

  toggle = () => this.setState({ entering: !this.state.entering });

  render() {
    return (
      <Fragment>
        {this.props.things.map((thing, i) => {
          console.log(thing);
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
      </Fragment>
    );
  }
}

export default Extras;
