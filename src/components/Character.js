import posed from "react-pose";
import React from "react";
import "./styles/Character.css";
import { easing, tween } from "popmotion";

const poseProps = {
  animateOnMount: true,
  draggable: true,
  enter: {
    x: -1000
  },
  start: {
    x: 50
    // transition: ({ props }) =>
    //   tween({
    //     ...props,
    //     from: 0,
    //     to: { x: 300, rotateY: 360 },
    //     duration: 3000,
    //     ease: easing.backOut
    //   })
  }
};
const Character = posed.div(poseProps);

export default Character;
