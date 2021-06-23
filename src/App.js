import "./App.css";
import React, { Component } from "react";

import NameList from "./components2/NameList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NameList />
      </div>
    );
  }
}

export default App;

// import FunctionClick from "./components2/FunctionClick";
// import ClassClick from "./components2/ClassClick";
// import Greed from "./components/Greed";
// import Welcome from "./components/Welcome";
// import Hello from "./components/Hello";
// import Message from "./components/Message";
// import Counter from "./components/Counter";
// import Calculator from "./components/Calculator";
// import Users from "./components/User/Users";
// import EventBind from "./components2/EventBind";
// import ParentComponent from "./components2/ParentComponent";
// import UserGreeting from "./components2/UserGreeting";

//          <Users />
//          <Counter />
//          <Calculator />
//          <Message />
//          <Welcome a="value1" b="value1" />
//          <Welcome a="value2" b="value2" />
//          <Greed name="Pritom" age="30">
//            <div>I am a children</div>
//          </Greed>
//          <Greed name="Mohit" age="45">
//            <button>Action</button>
//          </Greed>
//          <Hello name="Rohit" />
//          <Hello name="Rahul" />

// {/* <FunctionClick /> Event Handling in functional component*/}
// <ClassClick /> {/*Event Handling in class component */}
//  <EventBind />
// <ParentComponent />
// <UserGreeting />
