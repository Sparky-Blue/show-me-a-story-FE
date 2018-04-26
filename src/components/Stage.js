import React, { Component, Fragment } from "react";
import "./styles/Stage.css";
import Character from "./posed/Character";
import "./styles/weather.css";
import Extras from "./Extras";
import Weather from "./Weather";
import { PoseGroup } from "react-pose";

export class Stage extends Component {
  state = {
    curtainsClosed: true,
    fadeCurtain: false,
    fading: false
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(prevState.curtainsClosed, nextProps.scene.location);
    if (prevState.curtainsClosed && nextProps.scene.location) {
      return { curtainsClosed: false, fading: true };
    }
    return null;
  }

  componentDidUpdate() {
    if (this.state.fading === true) {
      console.log("here");
      this.fade();
    }
  }

  fade = () => {
    setTimeout(this.setState({ fadeCurtain: true, fading: false }), 10000);
  };

  render() {
    const { scene } = this.props;
    const characters = scene.characters ? scene.characters : [];
    const things = scene.things ? scene.things : [];
    const location = scene.location ? scene.location.url : "";
    const weather = scene.weather ? scene.weather : "none";
    return (
      <Fragment>
        {this.state.curtainsClosed && (
          <div className="welcome">
            <img
              className="penguin"
              src="http://www.clker.com/cliparts/6/a/t/O/e/B/fairy-penguin-hi.png"
              alt="Fairy Penguin clip art"
            />
          </div>
        )}
        {!this.state.curtainsClosed && (
          <div
            className={!this.state.fadeCurtain ? "stage" : "stage solid"}
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
        )}
      </Fragment>
    );
  }
}
