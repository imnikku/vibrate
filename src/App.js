import React, { useState } from "react";

export const App = () => {
  const [a, setA] = useState(10);
  function increment1() {
    navigator.vibrate(50); // vibrate for 200ms

    setA(a + 1);
  }
    function increment2() {
    navigator.vibrate(100); // vibrate for 200ms

    setA(a + 1);
  }
     function increment3() {
    navigator.vibrate(200); // vibrate for 200ms

    setA(a + 1);
  }
     function increment4() {
    navigator.vibrate(150); // vibrate for 200ms

    setA(a + 1);
  }
  console.log("render", a, setA);
  return (
    <div>
      <button onClick={increment1}>50</button>
         <button onClick={increment2}>100</button>
         <button onClick={increment4}>150</button>
    
         <button onClick={increment3}>200</button>
    
      <p>count:- {a}</p>
    </div>
  );
};
