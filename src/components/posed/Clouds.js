import posed from "react-pose";
import "../styles/Clouds.css";
import { easing, tween, spring, chain } from "popmotion";

const poseProps = {
  enter: {
    x: -1000
  },
  exit: {
    x: 1000,
    transition: props =>
      tween({
        ...props,
        duration: Math.random() * 10000 + 4000,
        loop: "Infinity"
      })
  }
};
const Clouds = posed.div(poseProps);

export default Clouds;
