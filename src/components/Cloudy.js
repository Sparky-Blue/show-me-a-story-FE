import React, { Fragment, Component } from "react";
import Clouds from "./posed/Clouds";
import "./styles/Clouds.css";

class Cloud extends Component {
  state = { entering: true };
  componentDidMount() {
    setTimeout(this.toggle, 100);
  }

  toggle = () => this.setState({ entering: !this.state.entering });

  render() {
    const clouds = new Array(8).fill();
    return (
      <Fragment>
        {clouds.map((cloud, index) => {
          return (
            <Clouds key={index} pose={this.state.entering ? "enter" : "exit"}>
              {index % 3 ? (
                <i className="fas fa-cloud" />
              ) : (
                <i className="fas fa-cloud big" />
              )}
            </Clouds>
          );
        })}
      </Fragment>
    );
  }
}

export default Cloud;
