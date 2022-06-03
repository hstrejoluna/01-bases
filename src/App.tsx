import { Counter } from "./bases/Counter";
import { CounterBy } from "./bases/CounterBy";


function App() {
  return (
    <>
      <Counter initialValue={1} />
      <CounterBy initialValue={1} />
    </>
  );
}

export default App;
