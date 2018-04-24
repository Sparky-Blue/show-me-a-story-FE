import React, { Component } from "react";
import posed from "react-pose";
import { easing, tween } from "popmotion";
import Wind from "./Wind";
import Rain from "./Rain";
import Snow from "./Snow";
import Cloudy from "./Cloudy";
import Sun from "./Sun";
import Storm from "./Storm";
import Rainbow from "./Rainbow";

class Weather extends Component {
  render() {
    const { weatherType } = this.props;
    console.log(weatherType);
    let weather;
    switch (weatherType) {
      case "rain":
        weather = <Rain />;
        break;
      case "wind":
        weather = <Wind />;
        break;
      case "snow":
        weather = <Snow />;
        break;
      case "cloudy":
        weather = <Cloudy />;
        break;
      case "sun":
        weather = <Sun />;
        break;
      case "storm":
        weather = <Storm />;
        break;
      case "rainbow":
        weather = <Rainbow />;
        break;
      default:
        weather = <div />;
    }
    return <div className={`weather ${weatherType}`}>{weather}</div>;
  }
}

export default Weather;
