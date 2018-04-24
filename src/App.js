import React, { Component } from "react";
import AudioControl from "./components/AudioControl";
import Message from "./components/Message";
import { db } from "./firebase";
import "./App.css";
import { Stage } from "./components/Stage";

class App extends Component {
  state = {
    message: "Passive",
    stageReady: false,
    scene: {
      location: {
        url: "https://i.ytimg.com/vi/r3y-6NLR5mo/maxresdefault.jpg",
        value: "blank"
      },
      weather: "",
      characters: { name: "", url: "" },
      things: { value: "" }
    },
    userId: `${Date.now()}`
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
        location: {
          url: "",
          value: "blank"
        },
        weather: "",
        characters: { name: "", url: "" },
        things: { value: "" }
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
    console.log(this.state.userId);
    const { message, stageReady, scene, userId } = this.state;
    return (
      <div className="container">
        {/* <img
          src="http://www.rjstax.com/wp-content/uploads/2014/03/Stage-Curtain-Shell-Cut-e1395618455582.png"
          alt=""
          className="curtains"
        /> */}
        <div className="audio-control">
          {stageReady && (
            <div>
              <AudioControl
                bot="set_the_scene"
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
