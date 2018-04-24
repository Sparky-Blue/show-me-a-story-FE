import React, { Component } from "react";
import "./styles/Rainbow.css";

class Rainbow extends Component {
  render() {
    return (
      <div className="rainbow">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Rainbow-diagram-ROYGBIV.svg/2000px-Rainbow-diagram-ROYGBIV.svg.png"
          alt=""
          id="rainbowImg"
        />
      </div>
    );
  }
}

export default Rainbow;
