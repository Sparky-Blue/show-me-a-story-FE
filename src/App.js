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
    docs: []
  };

  handleInputChange = event => {
    const { target } = event;
    const { value, name } = target;
    this.setState({ [name]: value });
  };

  changeMessageTo = message => {
    this.setState({ message });
  };

  render() {
    const { message, stageReady, docs } = this.state;
    return (
      <div className="audio-control">
        <AudioControl bot={this.BOT} changeMessageTo={this.changeMessageTo} />
        <Message message={message} />
      </div>
    );
  }
}

export default App;
