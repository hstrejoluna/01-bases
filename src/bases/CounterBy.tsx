import { useState } from "react";

interface Props {
  initialValue?: number;
}

interface CounterState {
  counter: number;
  clicks: number;
}

export const CounterBy = ({ initialValue = 5 }: Props) => {
  const [{counter, clicks}, setCounterState] = useState<CounterState>({
    counter: initialValue,
    click: 0,
  });

 
  const handleClick = (value: number) => {
    setCounterState( ({clicks, counter }) => ({
      counter: prev.counter + value,
      clicks: prev.clicks + 1,
    }));
  };

  return (
    <>
      <h1>CounterBy: {count}</h1>
      <h1>Clicks: {click}</h1>
      <button onClick={handleClick(1)}>+1</button>
      <button onClick={handleClick(5)}>+5</button>
    </>
  );
};
