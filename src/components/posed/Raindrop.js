import posed from "react-pose";
import { tween } from "popmotion";

const poseProps = {
  enter: {
    y: -1000
  },
  exit: {
    y: 850,
    transition: props =>
      tween({
        ...props,
        duration: Math.random() * 7000 + 2000,
        loop: "Infinity"
      })
  }
};
const Raindrop = posed.div(poseProps);

export default Raindrop;
