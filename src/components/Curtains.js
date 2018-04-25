import React, { Component } from "react";
import posed, { poseGroup } from "react-pose";
import { tween } from "popmotion";

const leftCurtainProps = {
  left: {
    x: "50%",
    rotate: 0,
    transition: props =>
      tween({
        ...props,
        duration: 1000
      })
  },
  right: {
    x: "800px",
    y: "-250px",
    rotate: -45,
    transition: props =>
      tween({
        ...props,
        duration: 30000
      })
  }
};
const rightCurtainProps = {
  left: {
    x: "50%",
    rotate: 0,
    transition: props =>
      tween({
        ...props,
        duration: 1000
      })
  },
  right: {
    x: "-1000px",
    y: "-250px",
    rotate: 45,
    transition: props =>
      tween({
        ...props,
        duration: 30000
      })
  }
};

const LeftCurtain = posed.div(leftCurtainProps);
const RightCurtain = posed.div(rightCurtainProps);

class Curtain extends Component {
  state = {
    move: false,
    ripple: true
  };
  render() {
    return (
      <div>
        <div className="container">
          <LeftCurtain
            className="left-curtain"
            pose={this.state.move ? "left" : "right"}
          >
            <img
              id="left"
              src="http://fin-soundlab.club/wp-content/uploads/2017/08/cartoon-curtains-red-curtain-elements-vector-background-curtains-cartoon-image.jpg"
              alt=""
            />
          </LeftCurtain>
          <RightCurtain
            className="right-curtain"
            pose={this.state.move ? "left" : "right"}
          >
            <img
              id="right"
              src="http://fin-soundlab.club/wp-content/uploads/2017/08/cartoon-curtains-red-curtain-elements-vector-background-curtains-cartoon-image.jpg"
              alt=""
            />
          </RightCurtain>
        </div>
        <button
          style={{ height: "100px", width: "100px" }}
          onClick={this.startMovement}
        >
          Move
        </button>
      </div>
    );
  }
  startMovement = () => {
    this.setState({
      move: !this.state.move
    });
  };
}

export default Curtain;
