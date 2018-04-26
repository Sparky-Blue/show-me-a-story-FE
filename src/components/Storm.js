import React, { Component } from "react";
import "./styles/Storm.css";
//import Rain from "./Rain.js";
//import Raindrop from "./Raindrop";
import ReactHowler from "react-howler";
import thunder from "./sounds/thunder.mp3";
import thunder2 from "./sounds/thunder2.mp3";
class Storm extends Component {
  state = {
    lightning: false,
    thunder: false
  };
  showLightning = () => {
    const time = Math.random() * 60000;
    console.log(time);
    setTimeout(() => {
      this.setState({
        lightning: true,
        thunder: true
      });
      setTimeout(() => {
        this.setState({ lightning: false });
      }, 200);
    }, time);
    // <ReactHowler
    //   src={thunder}
    //   format="audio/mpeg"
    //   playing={true}
    //   loop={true}
    // />;
  };
  resetThunder = () => {
    this.setState({
      thunder: false
    });
  };
  render() {
    const position = Math.random() * 100 - 25;
    if (!this.state.lightning) {
      this.showLightning();
    }
    return (
      <div className="container">
        {/* <img
          src="http://www.clker.com/cliparts/U/p/c/a/k/x/dark-cloud.svg"
          alt=""
          id="cloud1"
        />
        <img
          src="http://www.clker.com/cliparts/U/p/c/a/k/x/dark-cloud.svg"
          alt=""
          id="cloud2"
        /> */}
        {/* <div id="rain">
          <Rain id="raindrops" />
        </div> */}
        <ReactHowler
          src={thunder}
          playing={this.state.thunder}
          onEnd={this.resetThunder}
        />
        {this.state.lightning && (
          <img
            src="http://www.pngall.com/wp-content/uploads/2017/01/Lightning-High-Quality-PNG.png"
            alt=""
            id="lightning"
            style={{
              position: "absolute",
              left: `${position}%`,
              bottom: "0%",
              height: "100%"
            }}
          />
        )}
      </div>
    );
  }
}

// class Rain extends Component {
//   state = { entering: true };
//   componentDidMount() {
//     setTimeout(this.toggle, 1000);
//   }

//   toggle = () => this.setState({ entering: !this.state.entering });

//   render() {
//     const rain = new Array(180).fill();
//     return rain.map((raindrop, index) => {
//       return (
//         <Raindrop key={index} pose={this.state.entering ? "enter" : "exit"}>
//           <i className="fas fa-tint" />
//           {/* {index % 2 ? (
//             <img
//               src="http://pngimg.com/uploads/cat/cat_PNG103.png"
//               alt=""
//               style={{ height: "20vh" }}
//             />
//           ) : (
//             <img
//               src="http://www.mseye-design.co.uk/wordpress/wp-content/uploads/2013/06/jumpingdog-e1370956242603.png"
//               alt=""
//             />
//           )} */}
//         </Raindrop>
//       );
//     });
//   }
// }

export default Storm;
