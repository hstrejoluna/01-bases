import { useState } from "react";

export const Counter = ({ initialValue = 0 }) => {
  const [count, setCount] = useState(initialValue);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
