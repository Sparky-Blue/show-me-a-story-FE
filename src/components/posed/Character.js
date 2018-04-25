import posed from "react-pose";
import "../styles/Character.css";
import { easing, tween } from "popmotion";

const poseProps = {
  animateOnMount: true,
  draggable: true,
  enterPose: "enter",
  preEnterPose: "exit",
  exitPose: "exit",
  exit: {
    x: -2000
  },
  enter: {
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
