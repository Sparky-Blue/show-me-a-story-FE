import posed from "react-pose";
import "../styles/Clouds.css";
import { tween } from "popmotion";

const poseProps = {
  enter: {
    x: -800
  },
  exit: {
    x: 800,
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
