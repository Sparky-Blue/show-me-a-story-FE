import React, { Fragment, Component } from "react";
import "./styles/Storm.css";
import Rain from "./Rain.js";

class Storm extends Component {
  state = {
    lightning: false
  };
  showLightning = () => {
    const time = Math.random() * 3000 + 3000;
    setTimeout(() => {
      this.setState({ lightning: true });
      setTimeout(() => {
        this.setState({ lightning: false });
      }, 200);
    }, time);
  };
  render() {
    const position = Math.random() * 100 - 25;
    if (!this.state.lightning) {
      this.showLightning();
    }
    return (
      <Fragment>
        <Rain />
        {this.state.lightning && (
          <img
            src="http://www.pngall.com/wp-content/uploads/2017/01/Lightning-High-Quality-PNG.png"
            alt=""
            id="lightning"
            style={{
              position: "absolute",
              left: `${position}%`,
              bottom: "0%",
              height: "100%"
            }}
          />
        )}
      </Fragment>
    );
  }
}

export default Storm;
