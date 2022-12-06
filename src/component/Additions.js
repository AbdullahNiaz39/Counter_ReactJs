import React, { useState } from "react";
import Addition from "./Addition";

const Additions = () => {
  ///set Count useHook
  const [counters, setCount] = useState([
    { id: 1, value: 4 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]);

  ///Delete
  const handleDelete = (counterId) => {
    const count = counters.filter((c) => c.id !== counterId);
    setCount(count);
  };

  /// Reset function
  const handleReset = () => {
    const counterReset = counters.map((c) => {
      c.value = 0;
      return c;
    });
    setCount(counterReset);
  };

  /// Count Functionality
  const handleIncrement = (counter) => {
    const count = [...counters];
    const index = count.indexOf(counter);
    count[index] = { ...counter };
    count[index].value++;
    setCount(count);
  };

  ///Rendering
  return (
    <div>
      <button onClick={handleReset} className="btn btn-primary m-4">
        Reset
      </button>
      {counters.map((counter) => (
        <div>
          <Addition
            key={counter.id}
            counter={counter}
            onDelete={handleDelete}
            onIncrement={handleIncrement}
          ></Addition>
        </div>
      ))}
    </div>
  );
};

export default Additions;
