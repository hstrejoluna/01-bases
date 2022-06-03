import { Counter } from "./bases/Counter";
import { CounterBy } from "./bases/CounterBy";


function App() {
  return (
    <>
      <Counter initialValue />
      <CounterBy initialValue />
    </>
  );
}

export default App;
