import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <h1>
        Class Component a={this.props.a}, b={this.props.b}
      </h1>
    );
  }
}

export default Welcome;
