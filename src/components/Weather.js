import React, { Component } from "react";
import posed from "react-pose";
import { easing, tween } from "popmotion";
import Wind from "./Wind";
import Rain from "./Rain";
import Snow from "./Snow";
import Cloudy from "./Cloudy";
import Sun from "./Sun";

class Weather extends Component {
  render() {
    const { weatherType } = this.props;
    return (
      <div className={`weather ${weatherType}`}>
        {this.props.weatherType === "wind" ? <Wind /> : <Rain />}
      </div>
    );
  }
}

export default Weather;
