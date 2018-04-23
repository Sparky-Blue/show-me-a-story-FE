import posed from "react-pose";
import { easing, tween, spring, chain } from "popmotion";

const posePropsSnowflake = {
  enter: {
    y: -2500
  },
  exit: {
    y: 800,
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
  there: { opacity: 1, y: Math.random() * 50 + 750 },
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
