import posed from "react-pose";
import { easing, tween, spring, chain } from "popmotion";

const poseProps = {
  animateOnMount: true,
  enterPose: "enter",
  preEnterPose: "exit",
  exitPose: "exit",
  enter: {
    opacity: 0,
    transition: props => {
      tween({
        ...props,
        duration: 4000,
        ease: props.key === "enter" ? easing.linear : easing.anticipate
      });
    }
  },
  exit: {
    opacity: 1,
    transition: props => {
      tween({
        ...props,
        duration: 4000,
        ease: props.key === "enter" ? easing.linear : easing.anticipate
      });
    }
  }
};
const Screen = posed.div(poseProps);

export default Screen;
