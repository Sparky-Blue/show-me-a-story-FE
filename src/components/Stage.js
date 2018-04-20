import React, { Component } from "react";
import "./styles/Stage.css";
import Character from "./Character";
import "./styles/weather.css";

export class Stage extends Component {
  render() {
    console.log(this.props.docs);
    const { docs } = this.props;
    return (
      <div
        className="stage"
        style={{ "background-image": `url(${docs[0].location.url})` }}
      >
        <Character className="character">
          <img
            className="characterImg"
            src={docs[0].character.url}
            alt={docs[0].character.name}
          />
        </Character>
        <div className={docs[0].weather} />
      </div>
    );
  }
}
