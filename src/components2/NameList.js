import React from "react";

import Person from "./Person";

// const NameList = (props) => {
//   const names = ["pritom", "mohit", "rohit", "rahul"];
//   const nameList = names.map((name) => <h2>{name}</h2>);
//   return <div>{nameList}</div>;
// };

const NameList = () => {
  const persons = [
    {
      id: 1,
      name: "Pritom",
      age: 24,
      skill: "React",
    },
    {
      id: 2,
      name: "Mohit",
      age: 28,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Rohit",
      age: 33,
      skill: "Vue",
    },
    {
      id: 4,
      name: "Rahul",
      age: 25,
      skill: "Node",
    },
  ];
  const personList = persons.map((person) => (
    <Person key={persons.id} value={person} />
  ));
  return <div>{personList}</div>;
};
export default NameList;
