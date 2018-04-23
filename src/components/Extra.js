import posed, { PoseGroup } from "react-pose";
import React from "react";
// import "./styles/Extra.css";

import { spring, tween, physics, easing } from "popmotion";

const poseProps = {
  draggable: true,
  up: {
    y: "-1000%"
  },
  down: {
    y: "100%",
    transition: props =>
      spring({
        ...props
        // ease: easing.backInOut,
        // duration: 1000
      })
  }
};
const Extra = posed.div(poseProps);

export default Extra;
