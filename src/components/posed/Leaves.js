import posed from "react-pose";
import "../styles/Leaves.css";
import { tween } from "popmotion";

const poseProps = {
  enter: {
    x: -1500
  },
  exit: {
    x: 1500,
    transition: props =>
      tween({
        ...props,
        duration: Math.random() * 9000 + 4000,
        loop: "Infinity"
      })
  }
};
const Leaves = posed.div(poseProps);

export default Leaves;
