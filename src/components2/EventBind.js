import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };
  }

  //   clickHandler() {
  //     this.setState({
  //       message: "Good Bye",
  //     });
  //   }

  clickHandler = () => {
    this.setState({ message: "Good Bye" });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;

// event binging in class component
// bad performance
// approch 1: <button onClick={this.clickHandler.bind(this)}>Click</button>  // using binding in render

// approch 2: <button onClick={() => this.clickHandler()}>Click</button>  // using arrow function in render

// best one and react team is preferring this approch
// approch 3: this.clickHandler = this.clickHandler.bind(this); // binding in the class constractor
//             <button onClick={this.clickHandler}>Click</button>

// approch 4: <button onClick={this.clickHandler}>Click</button>
//             clickHandler = () => {this.setState({message: "Good Bye"})};  // using class property as arrow function
