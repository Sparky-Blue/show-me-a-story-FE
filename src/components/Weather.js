import React, { Component } from "react";
import Wind from "./Wind";
import Rain from "./Rain";
import Snow from "./Snow";
import Cloudy from "./Cloudy";
import Sun from "./Sun";
import Storm from "./Storm";
import Fog from "./Fog";
import Ice from "./Ice";
import Blizzard from "./Blizzard";
import Rainbow from "./Rainbow";
import Pouring from "./Pouring";
import "./styles/weather.css";

class Weather extends Component {
  render() {
    let { weatherType } = this.props;
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
      case "cloud":
        weather = <Cloudy />;
        break;
      case "sunny":
        weather = <Sun />;
        break;
      case "storm":
        weather = <Storm />;
        break;
      case "fog":
        weather = <Fog />;
        break;
      case "tornado":
        weatherType = "wind";
        weather = <Wind />;
        break;
      case "blizzard":
        weather = <Blizzard />;
        break;
      case "ice":
        weather = <Ice />;
        break;
      case "hail":
        weatherType = "blizzard";
        weather = <Blizzard />;
        break;
      case "rainbow":
        weather = <Rainbow />;
        break;
      case "pouring":
        weather = <Pouring />;
        break;
      default:
        weather = <div />;
    }
    return <div className={`weather ${weatherType}`}>{weather}</div>;
  }
}

export default Weather;
