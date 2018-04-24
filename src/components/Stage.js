import React, { Component } from "react";
import "./styles/Stage.css";
import Character from "./posed/Character";
import "./styles/weather.css";
import Extras from "./Extras";
import Weather from "./Weather";

export class Stage extends Component {
  state = { entering: true, curtainsClosed: true };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.scene.location) {
      return { curtainsClosed: false };
    }
    return null;
  }

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
    const characters = scene.characters ? Object.values(scene.characters) : [];
    const things = scene.things ? Object.values(scene.things) : [];
    const location = scene.location ? scene.location.url : "";
    const weather = scene.weather ? scene.weather : "none";
    return (
      <div className="stage" style={{ backgroundImage: `url(${location})` }}>
        {!this.state.curtainsClosed && <div>HELLO</div>}
        {characters.map((character, i) => {
          return (
            <Character
              key={i}
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
