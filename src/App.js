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
    scene: {}
  };

  componentDidMount() {
    this.subscribeToDB();
  }

  handleInputChange = event => {
    const { target } = event;
    const { value, name } = target;
    this.setState({ [name]: value });
  };

  changeMessageTo = message => {
    this.setState({ message });
  };

  subscribeToDB = () => {
    db
      .collection("session")
      .doc("scene1")
      .onSnapshot(doc => {
        const scene = doc.data();
        console.log(scene);
        this.setState({
          stageReady: true
          //scene
        });
      });
  };

  toggleStage = () => {
    this.setState({
      stageReady: !this.state.stageReady
    });
  };

  render() {
    const { message, stageReady, scene } = this.state;
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
