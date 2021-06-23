import React, { Component } from "react";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operand1: "",
      operand2: "",
      sum: "",
    };
  }

  getInput1Data() {
    this.setState({
      operand1: this.state.operand1,
    });
  }
  getInput2Data() {
    this.setState({
      operand2: this.state.operand2,
    });
  }
  addvalues(event) {
    this.setState({
      sum: this.state.operand2 + this.state.operand1,
    });
    console.log(this.state.sum);
  }

  render() {
    return (
      <div>
        <label>Value1</label>
        <input
          type="text"
          value={this.state.operand1}
          onChange={getInput1Data()}
        />
        <label>Value2</label>
        <input
          type="text"
          value={this.state.operand2}
          onChange={() => this.getInput2Data()}
        />
        <button onClick={() => this.addvalues()}>Add</button>
        <label>{this.state.sum}</label>
      </div>
    );
  }
}

export default Calculator;
