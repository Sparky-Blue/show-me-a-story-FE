import React, { Component } from "react";

import AudioControl from "./components/AudioControl";
import Message from "./components/Message";

import "./App.css";

class App extends Component {
  state = {
    message: "Passive",
    BOT: "set_the_scene",
    ACCESS_ID: "",
    SECRET_KEY: ""
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
    const { message, ACCESS_ID, SECRET_KEY, BOT } = this.state;
    return (
      <div className="audio-control">
        <AudioControl
          accessId={ACCESS_ID}
          secretKey={SECRET_KEY}
          bot={BOT}
          changeMessageTo={this.changeMessageTo}
        />
        <Message message={message} />

        <p>
          <input
            type="password"
            id="ACCESS_ID"
            name="ACCESS_ID"
            placeholder="ACCESS ID"
            onChange={this.handleInputChange}
            value={ACCESS_ID}
          />
        </p>
        <p>
          <input
            type="password"
            id="SECRET_KEY"
            name="SECRET_KEY"
            placeholder="SECRET KEY"
            onChange={this.handleInputChange}
            value={SECRET_KEY}
          />
        </p>
        <p>
          <input
            type="text"
            id="BOT"
            name="BOT"
            placeholder="BOT"
            onChange={this.handleInputChange}
            value={BOT}
          />
        </p>
      </div>
    );
  }
}

export default App;
