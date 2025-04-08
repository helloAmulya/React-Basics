import React, { useState } from "react";

function Dtype() {
  console.log("App Rendered", Math.random());

  // const [value, setValue] = useState(1);
  const [value, setValue] = useState({
    value: 1,
  });

  const clickme = () => {
    // console.log("logged,");
    // setValue(15);

    setValue({
      value: 0,
    });
  };

  /*  in the setvalue function ->
      1. if we pass the same thing, it will not re-render the component
      2. if we pass the different thing, it will re-render the component
      3. if we pass any object, it will re-render the component
  */
  return (
    <>
      {/* <h1>Main Value : {value}</h1> */}
      <h1>Main Value : {value.value}</h1> {/* for object */}
      <button onClick={clickme}>Click to multiplyby 5</button>
    </>
  );
}

export default Dtype;
