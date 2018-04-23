import posed from "react-pose";
// import "./styles/Extra.css";

import { spring } from "popmotion";

const poseProps = {
  draggable: true,
  up: {
    y: "-1000%"
  },
  down: {
    y: "100%",
    transition: props =>
      spring({
        ...props
        // ease: easing.backInOut,
        // duration: 1000
      })
  }
};
const Extra = posed.div(poseProps);

export default Extra;
