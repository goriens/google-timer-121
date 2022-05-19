import { useState } from "react";
import { Counter } from "./components/Counter";
import { Timer } from "./components/Timer";
import "./module.css";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <button className="switch" onClick={() => setShow(!show)}>
        VIEW TIMER
      </button>
      {show == true ? <Counter /> : <Timer />}
    </div>
  );
}

export default App;
