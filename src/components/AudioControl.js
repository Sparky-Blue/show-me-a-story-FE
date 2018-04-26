import React, { Fragment } from "react";
import AWS from "aws-sdk";

import Visualizer from "./Visualizer";
import Waveform from "../utils/renderer";
import "./styles/AudioControl.css";

import LexAudio from "../utils/lexAudio";
import lex from "../lex.png";
// import hello from "./hello.mp3";
// import question from "./question.mp3";
// import ReactHowler from "react-howler"

class AudioControl extends React.Component {
  setWaveform = node => {
    if (node) {
      this.waveform = Waveform(node);
    }
  };

  handleAudioControlClick = e => {
    const { changeMessageTo, bot, togglePlaying } = this.props;
    togglePlaying();
    const that = this;
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: "eu-west-1:3406189f-e003-43c7-a93b-95fa95a1b7b8"
    });
    AWS.config.region = "eu-west-1";

    const config = {
      silenceDetection: true,
      silenceDetectionConfig: { time: 3000, amplitude: 0.2 },
      lexConfig: { botName: bot }
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
      <Fragment>
        <button
          id="audio-control"
          onClick={this.handleAudioControlClick}
          className="white-circle"
        >
          Once upon a time...
        </button>
        <Visualizer setWaveform={this.setWaveform} />
      </Fragment>
    );
  }
}

export default AudioControl;
