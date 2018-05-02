import posed from "react-pose";

import { spring } from "popmotion";

const poseProps = {
  draggable: true,
  animateOnMount: true,
  enterPose: "enter",
  preEnterPose: "exit",
  exitPose: "exit",
  exit: {
    y: 1000
  },
  enter: {
    y: 200,
    transition: props =>
      spring({
        ...props
      })
  }
};
const Extra = posed.div(poseProps);

export default Extra;
