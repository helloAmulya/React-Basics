import { useState } from "react";

function Mult() {
  const [value, setValue] = useState(1);

  // const [multipliedValue, setMultipliedValue] = useState(0);
  // using single state we can also do that

  let multipliedValue = value * 5;

  const valueHandler = () => {
    // setMultipliedValue(value * 5);
    setValue(value + 1);
  };

  return (
    <>
      <h1>Main Value : {value}</h1>
      {/* <button onClick={valueHandler}>Click to multiplyby 5</button> */}
      <button onClick={() => setValue(value + 1)}>Click to multiplyby 5</button>
      <h2>Multiplied Value : {multipliedValue}</h2>
    </>
  );
}
/* this simple thingcan be done in many ways, 
    1. using single state
    2. using multiple states
    3. using valueHandler function
    4. directly calling the callback function in onClick      

*/

export default Mult;
