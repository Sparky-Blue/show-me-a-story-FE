import React, { Component } from "react";
import posed, { poseGroup } from "react-pose";
import { tween } from "popmotion";

class LeftCurtain extends Component {
  state = {
    open: false
  };
  render() {
    const leftCurtainProps = {
      open: {
        x: "500px",
        rotate: 45,
        transition: props =>
          tween({
            ...props,
            duration: 20000
          })
      },
      closed: {
        x: "100px",
        rotate: 0,
        transition: props =>
          tween({
            ...props,
            duration: 1000
          })
      }
    };

    const LeftCurtainDiv = posed.div(leftCurtainProps);
    return (
      <LeftCurtainDiv pose={this.state.open ? "open" : "closed"}>
        <img
          id="left"
          src="http://fin-soundlab.club/wp-content/uploads/2017/08/cartoon-curtains-red-curtain-elements-vector-background-curtains-cartoon-image.jpg"
          alt=""
          id="left"
          src="http://fin-soundlab.club/wp-content/uploads/2017/08/cartoon-curtains-red-curtain-elements-vector-background-curtains-cartoon-image.jpg"
          alt=""
        />
      </LeftCurtainDiv>
    );
  }
}

export default LeftCurtain;
