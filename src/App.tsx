import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>cool</p>
      <p>here is the {count}</p>
      <button onClick={() => setCount(count + 1)}>click to increment</button>
    </>
  );
}

export default App;
