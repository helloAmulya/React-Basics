// import { useState } from "react";

import "./App.css";
import Card from "./components/Card";

function App() {
  let myObj = { username: "amulya", age: 21 };
  // let newArr = [1,2,3,4]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind test
      </h1>

      {/* <Card channel="chai aur code" someObj={myObj}  /> */}
      <Card username="Amulya Ratna" />
      <Card username="Sharma" btnTxt= "Read More"/>
     
    </>
  );
}

export default App;
