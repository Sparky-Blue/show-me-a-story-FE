import React, { Fragment, Component } from "react";
import Clouds from "./posed/Clouds";
import "./styles/Clouds.css";

class Fog extends Component {
  state = { entering: true };
  componentDidMount() {
    setTimeout(this.toggle, 100);
  }

  toggle = () => this.setState({ entering: !this.state.entering });

  render() {
    const clouds = new Array(50).fill();
    return (
      <Fragment>
        {clouds.map((cloud, index) => {
          return (
            <Clouds key={index} pose={this.state.entering ? "enter" : "exit"}>
              {index % 3 ? (
                <i className="fas fa-cloud extraBig" />
              ) : (
                <i className="fas fa-cloud bigger" />
              )}
            </Clouds>
          );
        })}
      </Fragment>
    );
  }
}

export default Fog;
