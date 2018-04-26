import React, { Component } from "react";
import CatsAndDogs from "./posed/CatsAndDogs";
import "./styles/Rain.css";

class Rain extends Component {
  state = { entering: true };
  componentDidMount() {
    setTimeout(this.toggle, 1000);
  }

  toggle = () => this.setState({ entering: !this.state.entering });

  render() {
    const rain = new Array(6).fill();
    return rain.map((raindrop, index) => {
      return (
        <CatsAndDogs key={index} pose={this.state.entering ? "enter" : "exit"}>
          {index % 2 ? (
            <img
              src="http://pngimg.com/uploads/cat/cat_PNG103.png"
              alt="cat"
              style={index % 3 ? { height: "15vh" } : { height: "50vh" }}
            />
          ) : (
            <img
              src="http://www.mseye-design.co.uk/wordpress/wp-content/uploads/2013/06/jumpingdog-e1370956242603.png"
              alt="dag"
              style={index === 2 ? { height: "50vh" } : { height: "15vh" }}
            />
          )}
        </CatsAndDogs>
      );
    });
  }
}

export default Rain;
