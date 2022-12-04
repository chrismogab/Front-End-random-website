import { React, useState } from "react";
import "./Increment.css";
import { badge } from "@chakra-ui/react";

function Increment() {
  const [count, setCount] = useState(0);
  function increment() {
    let limit = 15;
    if (count === 15) {
      return limit;
    }
    setCount(count + 1);
  }
  function decrement() {
    let limit = 0;
    if (count < 1) {
      return limit;
    }
    setCount(count - 1);
  }
  function reset() {
    let initialSet = 0;
    setCount(initialSet);
  }

  return (
    <div className="increment">
      <p> Please choose a lucky number !</p>
      <button onClick={decrement} className="derement-button">
        -
      </button>
      <span className="count">{count} </span>
      <button onClick={increment} className="increment-button">
        +
      </button>
      <p></p>
      <button onClick={reset} className="reset-button">
        reset
      </button>
    </div>
  );
}

export default Increment;
