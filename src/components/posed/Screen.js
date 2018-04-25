import posed from "react-pose";
import { easing, tween, spring, chain } from "popmotion";

const poseProps = {
  enter: {
    opacity: 1
  },
  exit: {
    opacity: 0,
    transition: props => {
      tween({
        ...props,
        duration: 2000
      });
    }
  }
};
const Screen = posed.div(poseProps);

export default Screen;
