import React from "react";

const FunctionClick = () => {
  function clickHandler() {
    console.log("Functional component event handle");
  }
  return (
    <div>
      <button onClick={clickHandler}>click</button>
    </div>
  );
};

export default FunctionClick;
