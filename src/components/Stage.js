import React, { Component } from "react";
import "./styles/Stage.css";
import Character from "./Character";
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
    console.log(this.props.docs);
    const { docs } = this.props;
    return (
      <div
        className="stage"
        style={{ backgroundImage: `url(${docs[0].location.url})` }}
      >
        <Character
          className="character"
          pose={this.state.entering ? "enter" : "start"}
        >
          <img
            className="characterImg"
            src={docs[0].character.url}
            alt={docs[0].character.name}
          />
        </Character>
        <Extras extras={this.state.extras} />
        <Weather weatherType={docs[0].weather} />
      </div>
    );
  }
}
