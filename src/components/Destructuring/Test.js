import React from "react";

const Test = (props) => {
  const { name, heroName } = props;
  return (
    <div>
      <h1>
        Hello ${name}, hero: {heroName}
      </h1>
    </div>
  );
};

export default Test;
