import React, { useState } from "react";

export const App = () => {
  const [a, setA] = useState(10);
  function increment() {
    navigator.vibrate(200); // vibrate for 200ms

    setA(a + 1);
  }
  console.log("render", a, setA);
  return (
    <div>
      <button onClick={increment}>Increment</button>
      <p>count:- {a}</p>
    </div>
  );
};
