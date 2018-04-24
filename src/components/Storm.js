import React, { Component } from "react";
import "./styles/Storm.css";
import Rain from "./Rain.js";
class Storm extends Component {
  state = {
    lightning: false
  };
  showLightning = () => {
    const time = Math.random() * 55000 + 5000;
    setTimeout(() => {
      this.setState({ lightning: true });
    }, time);
    setTimeout(() => {
      this.setState({ lightning: false });
    }, 100);
  };
  render() {
    if (!this.state.lightning) this.showLightning();
    return (
      <div className="container">
        <Rain />
        {this.state.lightning && (
          <img
            src="http://www.pngall.com/wp-content/uploads/2017/01/Lightning-High-Quality-PNG.png"
            alt=""
            id="lightning"
          />
        )}
      </div>
    );
  }
}

export default Storm;
