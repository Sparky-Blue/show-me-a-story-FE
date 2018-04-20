import posed, { PoseGroup } from "react-pose";
import React from "react";
import "./styles/Character.css";

import { spring } from "popmotion";

const poseProps = {
  draggable: true
  // dragBounds: { left: -100, right: 800 },
  // dragEnd: { transition: spring }
};
const Character = posed.div(poseProps);

export default Character;
