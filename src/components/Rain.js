import React, { Component } from "react";
import Raindrop from "./Raindrop";
import "./styles/Rain.css";

class Rain extends Component {
  state = { entering: true };
  componentDidMount() {
    setTimeout(this.toggle, 1000);
  }

  toggle = () => this.setState({ entering: !this.state.entering });

  render() {
    const rain = new Array(180).fill();
    return rain.map((raindrop, index) => {
      return (
        <Raindrop key={index} pose={this.state.entering ? "enter" : "exit"}>
          <i className="fas fa-tint" />
          {/* {index % 2 ? (
            <img
              src="http://pngimg.com/uploads/cat/cat_PNG103.png"
              alt=""
              style={{ height: "20vh" }}
            />
          ) : (
            <img
              src="http://www.mseye-design.co.uk/wordpress/wp-content/uploads/2013/06/jumpingdog-e1370956242603.png"
              alt=""
            />
          )} */}
        </Raindrop>
      );
    });
  }
}

export default Rain;
