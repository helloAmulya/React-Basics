import { useState, useEffect } from "react";

import "./App.css";

function App() {
  // useState is a hook that allows you to have state variables in functional components
  // useState returns an array with two elements

  // const [counter, setCounter] = useState(5);

  let [counter, setCounter] = useState(5);

  // let counter = 5;

  const addValue = () => {
    // counter++;
    //  as UI updation is controlled by react, only counter++ will not update the UI
    //  therefore use hooks

    console.log("value added", counter);
    setCounter(counter + 1);
  };

  const removeValue = () => {
    console.log("value removed", counter);
    setCounter(counter - 1);

    if (counter <= 0) {
      console.log("Value cannot go in negative")
      setCounter(0);
    }
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter} </h2>
      <button onClick={addValue}>Add Value</button> <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
