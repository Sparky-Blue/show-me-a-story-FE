import posed from "react-pose";
import "./styles/Leaves.css";
import { easing, tween, spring, chain } from "popmotion";

const poseProps = {
  enter: {
    y: -2000
  },
  exit: {
    y: 700,
    transition: props =>
      tween({
        ...props,
        duration: Math.random() * 7000 + 2000,
        loop: "Infinity",
        ease: easing.backOut
      })
  }
};
const Raindrop = posed.div(poseProps);

export default Raindrop;
