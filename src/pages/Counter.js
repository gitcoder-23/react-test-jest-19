import React, { useState } from "react";

const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount((prev) => prev - 1);
    }
  };
  const restart = () => {
    setCount(0);
  };
  const switchSigns = () => {
    setCount((prev) => prev * -1);
  };
  return (
    <div>
      <h1>
        Count: <h3 data-testid="count">{count}</h3>
      </h1>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={restart}>Restart</button>
        <button onClick={switchSigns}>Swich Signs</button>
      </div>
    </div>
  );
};

export default Counter;
