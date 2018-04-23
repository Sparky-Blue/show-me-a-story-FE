import React, { Component } from "react";
import posed from "react-pose";
import { easing, tween } from "popmotion";
import Wind from "./Wind";
import Rain from "./Rain";

class Weather extends Component {
  render() {
    return (
      <div className="weather">
        {this.props.weatherType === "wind" ? <Wind /> : <Rain />}
      </div>
    );
  }
}

export default Weather;
