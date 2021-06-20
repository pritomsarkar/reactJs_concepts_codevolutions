import React, { useState } from "react";

// import components
import CarIndivisual from "./CarIndivisual";

const Car = () => {
  let [car, setCar] = useState([
    { carId: "1", name: "BMW", color: "red" },
    { carId: "2", name: "SUB", color: "black" },
    { carId: "3", name: "Honda", color: "red" },
  ]);
  return (
    <div>
      {car.map((element) => (
        <CarIndivisual name={element.name} />
      ))}
    </div>
  );
};

export default Car;
