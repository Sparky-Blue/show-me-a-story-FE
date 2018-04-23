import posed from "react-pose";
import "./styles/Leaves.css";
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
        duration: Math.random() * 8000 + 4000,
        loop: "Infinity"
      })
  }
};
const Leaves = posed.div(poseProps);

export default Leaves;
