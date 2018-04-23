import posed from "react-pose";
import React from "react";
import "./styles/Character.css";
import { easing, tween } from "popmotion";

const poseProps = {
  animateOnMount: true,
  draggable: true,
  enter: {
    x: -2000
  },
  start: {
    x: 50,
    transition: props =>
      tween({
        ...props,
        ease: easing.backInOut,
        duration: 1000
      })
  }
};
const Character = posed.div(poseProps);

export default Character;
