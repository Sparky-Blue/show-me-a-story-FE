import React, { Component } from "react";
import "./styles/Stage.css";
import Character from "./posed/Character";
import "./styles/weather.css";
import Extras from "./Extras";
import Weather from "./Weather";

export class Stage extends Component {
  state = {
    extras: [
      {
        value: "hat",
        url:
          "https://openclipart.org/image/2400px/svg_to_png/14834/nicubunu-Green-fedora.png"
      },
      {
        value: "flySwatter",
        url: "http://img11.hostingpics.net/pics/529757swat2.png"
      }
    ],
    entering: true
  };

  changeMessageTo = message => {
    this.setState({ message });
  };

  componentDidMount() {
    setTimeout(this.toggle, 1000);
  }

  toggle = () =>
    this.setState({
      entering: !this.state.entering
    });

  render() {
    const { scene } = this.props;
    const characters = scene.characters.name
      ? Object.values(scene.characters)
      : [];
    const things = scene.things.value ? Object.values(scene.things) : [];
    const location = scene.location.url ? scene.location.url : "";
    const weather = scene.weather ? scene.weather : "none";
    console.log(things);
    return (
      <div className="stage" style={{ backgroundImage: `url(${location})` }}>
        {characters.map(character => {
          return (
            <Character
              className="character"
              pose={this.state.entering ? "enter" : "start"}
            >
              <img className="characterImg" src={character} alt="character" />
            </Character>
          );
        })}
        <Extras things={things} />
        <Weather weatherType={weather} />
      </div>
    );
  }
}
