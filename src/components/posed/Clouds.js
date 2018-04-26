import posed from "react-pose";
import "../styles/Clouds.css";
import { tween } from "popmotion";

const poseProps = {
  enter: {
    x: -2000
  },
  exit: {
    x: 2000,
    transition: props =>
      tween({
        ...props,
        duration: Math.random() * 8000 + 10000,
        loop: "Infinity"
      })
  }
};
const Clouds = posed.div(poseProps);

export default Clouds;
