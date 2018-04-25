import posed from "react-pose";
// import "./styles/Extra.css";

import { spring } from "popmotion";

const poseProps = {
  draggable: true,
  animateOnMount: true,
  enterPose: "enter",
  preEnterPose: "exit",
  exitPose: "exit",
  exit: {
    y: "-1000%"
  },
  enter: {
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
