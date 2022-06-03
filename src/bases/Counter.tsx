import { useState } from "react";

interface Props {
  initialValue?: number;
}

export const Counter = ({ initialValue }: Props) => {
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
