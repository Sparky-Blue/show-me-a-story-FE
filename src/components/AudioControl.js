import React, { Fragment } from "react";
import AWS from "aws-sdk";
import ReactHowler from "react-howler";
import hello from "./sounds/hello.mp3";
import question from "./sounds/question.mp3";

import Visualizer from "./Visualizer";
import Waveform from "../utils/renderer";
import "./styles/AudioControl.css";

import LexAudio from "../utils/lexAudio";

class AudioControl extends React.Component {
  state = {
    promptPlayed: false
  };

  setWaveform = node => {
    if (node) {
      this.waveform = Waveform(node);
    }
  };

  togglePromptPlayed = () => {
    this.setState({
      promptPlayed: !this.state.promptPlayed
    });
  };

  handleAudioControlClick = e => {
    this.togglePromptPlayed();
    const { changeMessageTo, bot, userId } = this.props;
    const that = this;
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: "eu-west-1:3406189f-e003-43c7-a93b-95fa95a1b7b8"
    });
    AWS.config.region = "eu-west-1";

    const config = {
      silenceDetection: true,
      silenceDetectionConfig: { time: 1500, amplitude: 0.3 },
      lexConfig: { botName: bot, userId }
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
    const { buttonMessage } = this.props;
    return (
      <Fragment>
        <ReactHowler
          src={this.props.bot === "set_the_scene" ? hello : question}
          playing={this.state.promptPlayed}
          onEnd={this.handleAudioControlClick}
        />
        <button
          id="audio-control"
          onClick={this.togglePromptPlayed}
          className="white-circle"
        >
          {buttonMessage}
        </button>
        <Visualizer setWaveform={this.setWaveform} />
      </Fragment>
    );
  }
}

export default AudioControl;
