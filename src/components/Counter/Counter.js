import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementValue() {
    // this.setState(
    //   {
    //     count: this.state.count + 1, // react is actually can group multiple setState() into one
    //   },
    //   () => {
    //     console.log("callback value:", this.state.count);
    //   }
    // );

    this.setState(
      (prev, props) => ({
        count: prev.count + props.value,
      }),
      () => {
        console.log(this.state.count);
      }
    );
    console.log(this.state.count);
  }

  incrementFive() {
    this.incrementValue();
    this.incrementValue();
    this.incrementValue();
    this.incrementValue();
    this.incrementValue();
  }
  render() {
    const { value } = this.props;
    return (
      <div>
        <div>Initial : {value}</div>
        <div>Count : {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
