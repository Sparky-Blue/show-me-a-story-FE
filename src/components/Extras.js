import React, { Component, Fragment } from "react";
import "./styles/Extras.css";
import Extra from "./Extra";
import { PoseGroup } from "react-pose";

class Extras extends Component {
  render() {
    return (
      <PoseGroup>
        {this.props.things.map((thing, i) => {
          return (
            <Extra className="extra" key={i}>
              <img className="extra" src={thing} alt="thing" />
            </Extra>
          );
        })}
      </PoseGroup>
    );
  }
}

export default Extras;
