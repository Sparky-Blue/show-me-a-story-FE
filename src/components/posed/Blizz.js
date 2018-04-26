import posed from "react-pose";
import { easing, tween } from "popmotion";

const poseProps = {
  enter: {
    y: -2000,
    x: -1000
  },
  exit: {
    y: 700,
    x: 800,
    transition: props =>
      tween({
        ...props,
        duration: Math.random() * 7000 + 2000,
        loop: "Infinity",
        ease: easing.backOut
      })
  }
};
const Blizz = posed.div(poseProps);

export default Blizz;
