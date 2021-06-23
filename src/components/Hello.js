import React from "react";

const Hello = (props) => {
  return (
    <div className="dummyClass">
      <h1>Hello {props.name} </h1>
    </div>
  );
};

export default Hello;

//   return React.createElement(
//     "div",
//     { id: "hello", className: "dummyClass" },
//     React.createElement("h1", null, "Hello JSX")
//   );
