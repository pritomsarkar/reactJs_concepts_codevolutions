import React from "react";
// import Greet from "./components/References/DummyClassComponent";
// import Welcome from "./components/References/DummyFunctionalComponent";
// import Hello from "./components/References/DummyFunctionalComponent2";
import Car from "./components/StateManagement/Car";
import Counter from "./components/Counter/Counter";
import Test from "./components/Destructuring/Test";

function App() {
  const initial = 10;
  return (
    <div>
      <Car />
      <Counter value={initial} />
      <Test name="pritom" heroName="Rohit" />
    </div>
  );
}

export default App;
