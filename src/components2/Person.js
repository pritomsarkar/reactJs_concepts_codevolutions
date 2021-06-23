import React from "react";

const Person = ({ value }) => {
  return (
    <div>
      <h1>
        I am {value.name}, I am {value.age} years old. I know {value.skill}
      </h1>
    </div>
  );
};

export default Person;
