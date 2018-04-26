import posed from "react-pose";
import { tween } from "popmotion";

const posePropsSnowflake = {
  enter: {
    y: -2500
  },
  exit: {
    y: 850,
    transition: props =>
      tween({
        ...props,
        duration: Math.random() * 7000 + 1000,
        loop: "Infinity"
      })
  }
};
export const Snowflake = posed.div(posePropsSnowflake);

const posePropsSnowfall = {
  there: { opacity: 1, y: "98%" },
  gone: {
    opacity: 0,
    transition: props =>
      tween({
        ...props,
        duration: Math.random() * 8000 + 2000,
        loop: "Infinity"
      })
  }
};
export const Snowfall = posed.div(posePropsSnowfall);
