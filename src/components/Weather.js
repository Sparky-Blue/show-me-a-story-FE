import React, { Component } from "react";
import posed from "react-pose";
import { easing, tween } from "popmotion";
import Wind from "./Wind";
import Rain from "./Rain";
import Snow from "./Snow";
import Cloudy from "./Cloudy";

class Weather extends Component {
  render() {
    const { weatherType } = this.props;
    console.log(weatherType);
    return (
      <div className={`weather ${weatherType}`}>
        {this.props.weatherType === "wind" ? <Cloudy /> : <Cloudy />}
      </div>
    );
  }
}

export default Weather;
