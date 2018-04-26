import React, { Component } from "react";
import AudioControl from "./components/AudioControl";
import Message from "./components/Message";
import { db } from "./firebase";
import "./App.css";
import { Stage } from "./components/Stage";

class App extends Component {
  state = {
    message: "Just a moment...",
    stageReady: false,
    scene: {
      location: {},
      weather: null,
      characters: null,
      things: null
    },
    userId: `${Date.now()}`
    // userId: `1524737020220`
  };

  componentDidMount() {
    this.addNewScene(this.state.userId);
    this.subscribeToDB(this.state.userId);
  }

  handleInputChange = event => {
    const { target } = event;
    const { value, name } = target;
    this.setState({ [name]: value });
  };

  changeMessageTo = message => {
    this.setState({ message });
  };

  addNewScene = userId => {
    db
      .collection("session")
      .doc(userId)
      .set({
        location: null,
        weather: null,
        characters: null
      });
  };

  subscribeToDB = userId => {
    db
      .collection("session")
      .doc(userId)
      .onSnapshot(doc => {
        const scene = doc.data();
        this.setState({
          stageReady: true,
          scene
        });
      });
  };

  toggleStage = () => {
    this.setState({
      stageReady: !this.state.stageReady
    });
  };

  render() {
    const { message, stageReady, scene, userId } = this.state;
    return (
      <div className="container">
        <div className="audio-control">
          {!this.state.scene.characters && (
            <div>
              <AudioControl
                bot="set_the_scene"
                buttonMessage="Start"
                changeMessageTo={this.changeMessageTo}
                userId={userId}
              />
              <Message message={message} />
            </div>
          )}
          {this.state.scene.characters && (
            <div>
              <AudioControl
                bot="Add_extra_props"
                buttonMessage="Add"
                changeMessageTo={this.changeMessageTo}
                userId={userId}
              />
              <Message message={message} />
            </div>
          )}
        </div>
        {stageReady && <Stage scene={scene} />}
      </div>
    );
  }
}

export default App;
