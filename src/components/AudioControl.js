import React from "react";
import AWS from "aws-sdk";

import Visualizer from "./Visualizer";
import Waveform from "../utils/renderer";

import LexAudio from "../utils/lexAudio";
import lex from "../lex.png";

class AudioControl extends React.Component {
  setWaveform = node => {
    if (node) {
      this.waveform = Waveform(node);
    }
  };

  handleAudioControlClick = e => {
    const bot = "set_the_scene";
    const { changeMessageTo } = this.props;
    const that = this;
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: "eu-west-1:3406189f-e003-43c7-a93b-95fa95a1b7b8"
    });
    AWS.config.region = "eu-west-1";

    const config = {
      lexConfig: {
        botName: bot
      }
    };

    this.conversation = new LexAudio.conversation(
      config,
      function(state) {
        changeMessageTo(state + "...");
        if (state === "Listening") {
          that.waveform.prepCanvas();
        }
        if (state === "Sending") {
          that.waveform.clearCanvas();
        }
      },
      function(data) {
        console.log(
          "Transcript: ",
          data.inputTranscript,
          ", Response: ",
          data.message
        );
      },
      function(error) {
        changeMessageTo(error);
      },
      function(timeDomain, bufferLength) {
        that.waveform.visualizeAudioBuffer(timeDomain, bufferLength);
      }
    );
    this.conversation.advanceConversation();
  };

  render() {
    return (
      <p
        id="audio-control"
        onClick={this.handleAudioControlClick}
        className="white-circle"
      >
        <img src={lex} alt="lex" />
        <Visualizer setWaveform={this.setWaveform} />
      </p>
    );
  }
}

export default AudioControl;
