import React, { Component } from "react";

export class Stage extends Component {
  render() {
    console.log(this.props.docs);
    const { docs } = this.props;
    return (
      <div>
        <img src={docs[0].location.url} alt="location" />
      </div>
    );
  }
}
