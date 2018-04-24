import React, { Component } from "react";
import posed, { poseGroup } from "react-pose";
import { tween } from "popmotion";
import "./styles/Curtains.css";

class Curtains extends Component {
  state = {
    open: false
  };

  openCurtains = () => {
    this.setState({ open: !this.state.open });
  };
  render() {
    const leftCurtainProps = {
      closed: {
        x: "100px",
        rotate: 0,
        transition: props =>
          tween({
            duration: 15000
          })
      },
      open: {
        x: "2000px",
        rotate: -45,
        transition: props =>
          tween({
            ...props,
            duration: 15000
          })
      }
    };

    const rightCurtainProps = {
      closed: {
        x: "100px",
        rotate: 0,
        transition: props =>
          tween({
            ...props,
            duration: 15000
          })
      },
      open: {
        x: "-1000px",
        rotate: 45,
        transition: props =>
          tween({
            ...props,
            duration: 15000
          })
      }
    };

    const LeftCurtain = posed.div(leftCurtainProps);
    const RightCurtain = posed.div(rightCurtainProps);

    return (
      <div className="container">
        <LeftCurtain
          className="left-curtain"
          pose={this.state.open ? "open" : "closed"}
        >
          <img
            id="left"
            src="http://fin-soundlab.club/wp-content/uploads/2017/08/cartoon-curtains-red-curtain-elements-vector-background-curtains-cartoon-image.jpg"
            alt=""
          />
        </LeftCurtain>
        <RightCurtain
          className="right-curtain"
          pose={this.state.open ? "open" : "closed"}
        >
          <img
            id="left"
            src="http://fin-soundlab.club/wp-content/uploads/2017/08/cartoon-curtains-red-curtain-elements-vector-background-curtains-cartoon-image.jpg"
            alt=""
          />
        </RightCurtain>

        <button onClick={this.openCurtains} className="button">
          Open
        </button>
      </div>
    );
  }
}

export default Curtains;
