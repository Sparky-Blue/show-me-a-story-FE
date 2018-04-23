import React, { Component, Fragment } from "react";
import { Snowflake, Snowfall } from "./Snowflake";
import "./styles/Rain.css";
import "./styles/Snow.css";

class Snow extends Component {
  state = { entering: true };
  componentDidMount() {
    setTimeout(this.toggle, 1000);
  }

  toggle = () => this.setState({ entering: !this.state.entering });

  render() {
    const snow = new Array(35).fill();
    return snow.map((snowflake, index) => {
      return (
        <Fragment>
          <Snowflake key={index} pose={this.state.entering ? "enter" : "exit"}>
            <i class="far fa-snowflake" />
          </Snowflake>
          <Snowfall key={index} pose={this.state.entering ? "there" : "gone"}>
            <i class="far fa-snowflake" />
          </Snowfall>
        </Fragment>
      );
    });
  }
}

export default Snow;
