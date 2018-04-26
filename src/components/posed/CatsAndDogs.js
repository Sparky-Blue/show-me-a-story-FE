import posed from "react-pose";
import { easing, tween } from "popmotion";

const poseProps = {
  enter: {
    y: -1000
  },
  exit: {
    y: 700,
    transition: props =>
      tween({
        ...props,
        duration: Math.random() * 7000 + 2000,
        ease: easing.backOut,
        loop: "Infinity"
      })
  }
};
const CatsAndDogs = posed.div(poseProps);

export default CatsAndDogs;
