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
    db.collection("session").onSnapshot(querySnapshot => {
      const docs = [];
      querySnapshot.forEach(doc => {
        console.log(doc.data());
        docs.push(doc.data());
      });
      this.setState({
        stageReady: true,
        docs
      });
    });
  };

  toggleStage = () => {
    this.setState({
      stageReady: !this.state.stageReady
    });
  };

  render() {
    const { message, stageReady, docs } = this.state;
    return (
      <div className="audio-control">
        {!stageReady && (
          <div>
            <AudioControl
              bot="set_the_scene"
              changeMessageTo={this.changeMessageTo}
            />
            <Message message={message} />
            <button onClick={this.toggleStage}>Test Stage View</button>
          </div>
        )}
        {stageReady && <Stage docs={docs} />}
      </div>
    );
  }
}

export default App;
