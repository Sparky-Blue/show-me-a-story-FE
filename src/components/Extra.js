import posed, { PoseGroup } from "react-pose";
import React from "react";
// import "./styles/Extra.css";

import { spring, tween } from "popmotion";

const poseProps = {
  animateOnMount: true,
  draggable: true,
  up: {
    y: "-1000%",
    transition: props => spring({ ...props, duration: 5000 })
  },
  down: {
    y: "100%",
    duration: 10000,
    transition: props => spring({ ...props, duration: 10000 })
  }
};
const Extra = posed.div(poseProps);

export default Extra;
