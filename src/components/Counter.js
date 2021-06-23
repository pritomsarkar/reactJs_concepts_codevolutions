import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementHandler(prev) {
    this.setState(
      (prev) => ({
        count: prev.count + 1,
      }),
      () => {
        console.log(this.state.count);
      }
    );
  }

  decrementHandler() {
    this.setState({
      count: this.state.count - 1,
    });
  }
  incrementFiveTimes() {
    this.incrementHandler();
    this.incrementHandler();
    this.incrementHandler();
    this.incrementHandler();
    this.incrementHandler();
  }

  render() {
    return (
      <div>
        <h1>Current value : {this.state.count}</h1>
        <button
          onClick={() => {
            this.incrementHandler();
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            this.decrementHandler();
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            this.incrementFiveTimes();
          }}
        >
          IncByfive
        </button>
      </div>
    );
  }
}

export default Counter;
