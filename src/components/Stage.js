import React, { Component, Fragment } from "react";
import "./styles/Stage.css";
import Character from "./posed/Character";
import "./styles/weather.css";
import "./styles/Screen.css";
import Extras from "./Extras";
import Weather from "./Weather";
import Screen from "./posed/Screen";
import { PoseGroup } from "react-pose";

export class Stage extends Component {
  state = {
    curtainsClosed: true
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.scene.location) {
      return { curtainsClosed: false };
    }
    return null;
  }

  changeMessageTo = message => {
    this.setState({ message });
  };

  render() {
    const { scene } = this.props;
    const characters = scene.characters ? scene.characters : [];
    const things = scene.things ? scene.things : [];
    const location = scene.location ? scene.location.url : "";
    const weather = scene.weather ? scene.weather : "none";
    return (
      <Fragment>
        {this.state.curtainsClosed ? (
          <Screen
            className="screen"
            // pose={this.state.curtainsClosed ? "exit" : "enter"}
          />
        ) : (
          <div
            className="stage"
            style={{ backgroundImage: `url(${location})` }}
          >
            <PoseGroup>
              {characters.map((character, i) => {
                return (
                  <Character
                    key={i}
                    className="character"
                    style={{ backgroundImage: `url(${character})` }}
                  >
                    {/* <img className="characterImg" src={character} alt="character" /> */}
                  </Character>
                );
              })}
            </PoseGroup>
            <Extras things={things} />
            <Weather weatherType={weather} />
          </div>
        )}
      </Fragment>
    );
  }
}
