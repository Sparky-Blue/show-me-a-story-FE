import React, { Component } from "react";
import "./styles/Stage.css";
import Character from "./Character";
import "./styles/weather.css";
import Extras from "./Extras";
import Weather from "./Weather";
import Curtains from "./Curtains";
import LeftCurtain from "./posed/LeftCurtain";
import hello from "./hello.mp3";
// import question from "./question.mp3";
// import ReactHowler from "react-howler";
// import Sound from "react-sound";

export class Stage extends Component {
  state = {
    playing: false,
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
  startPlaying = () =>
    this.setState({
      playing: !this.state.playing
    });

  render() {
    const { scene } = this.props;
    const characters = scene.characters ? Object.values(scene.characters) : [];
    const things = scene.things ? Object.values(scene.things) : [];
    const location = scene.location
      ? scene.location.url
      : "https://wallpapercave.com/wp/LDX4QKv.jpg";
    const weather = scene.weather ? scene.weather : "rain";
    console.log(things);
    return (
      <div className="stage" style={{ backgroundImage: `url(${location})` }}>
        {/* <audio controls className="audio">
          <source src={hello} type="audio/mpeg" />
        </audio> */}
        {/* <audio controls className="audio">
          <source src={question} type="audio/mpeg" />
        </audio>
        <ReactHowler src={hello} playing={this.state.playing} loop={false} /> */}
        {/* <Sound url={hello} playStatus={Sound.status.PLAYING} loop={false} /> */}
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
