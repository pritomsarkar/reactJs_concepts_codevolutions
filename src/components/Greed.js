import React from "react";

const Greed = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        Hello {props.name} of age {props.age}
      </h1>
      {props.children}
    </div>
  );
};
export default Greed;
