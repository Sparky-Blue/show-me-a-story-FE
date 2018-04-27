import React, { Component, Fragment } from "react";
import "./styles/Stage.css";
import Character from "./posed/Character";
import "./styles/weather.css";
import Extras from "./Extras";
import Weather from "./Weather";
import { PoseGroup } from "react-pose";

export class Stage extends Component {
  state = {
    curtainsClosed: true
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.curtainsClosed && nextProps.scene.location) {
      return { curtainsClosed: false };
    }
    return null;
  }

  render() {
    const { scene } = this.props;
    const characters = scene.characters ? scene.characters : [];
    const things = scene.things ? scene.things : [];
    const location = scene.location ? scene.location.url : "";
    const weather = scene.weather ? scene.weather : "none";
    return (
      <Fragment>
        <div
          className={!this.state.curtainsClosed ? "welcome" : "welcome faded"}
          //  hidden={!this.state.curtainsClosed}
        >
          <img
            className="penguin"
            src="http://www.clker.com/cliparts/6/a/t/O/e/B/fairy-penguin-hi.png"
            alt="Fairy Penguin clip art"
          />
        </div>
        <div
          className={this.state.curtainsClosed ? "stage" : "stage solid"}
          style={{ backgroundImage: `url(${location})` }}
          key="1"
        >
          <PoseGroup>
            {characters.map((character, i) => {
              return (
                <Character key={i} className="character">
                  <img
                    className="characterImg"
                    src={character}
                    alt="character"
                  />
                </Character>
              );
            })}
          </PoseGroup>
          <Extras things={things} />
          <Weather weatherType={weather} />
        </div>
      </Fragment>
    );
  }
}
