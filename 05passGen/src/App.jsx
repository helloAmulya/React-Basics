import { useState, useCallback, useEffect, useRef } from "react";

// import "./App.css";

function App() {
  const [len, setlen] = useState(8);
  const [numIn, setnumIn] = useState(false);
  const [charIn, setcharIn] = useState(false);
  const [pswrd, setpswrd] = useState("");

  const [bgColor, setBgColor] = useState("bg-blue-700");

  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numIn) str += "0123456789";
    if (charIn) str += "!@#$%^&*()_+";

    for (let i = 1; i <= len; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setpswrd(pass);
    
  }, [numIn, len, charIn, setpswrd]);

  // using the hook useEffect to run (call) the password generator
  useEffect(() => {
    passGenerator();
  }, [len, numIn, charIn, passGenerator]);

  // useRef hook for copy to clipboard
  const passRef = useRef(null);

  const copyPass = useCallback(() => {
    passRef.current?.select();

    // setSelectionRange select only the required value
    // passRef.current?.setSelectionRange(0, 30);

    // direct way
    window.navigator.clipboard.writeText(pswrd);

    // change button color when clicked
    setBgColor((prev) =>
      prev === "bg-blue-700" ? "bg-green-600" : "bg-blue-700"
    );
  }, [pswrd]);

  return (
    <>
      <div className="w-full mx-auto max-w-md shadow-md rounded-lg px-4 py-6 my-14 text-orange-500  bg-gray-700">
        {" "}
        <h1 className="text-white text-4xl text-center my-3">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          <input
            type="text"
            value={pswrd}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passRef}
          />

          <button
            className={`outline-none ${bgColor} text-white px-3 py-0.5 shrink-0  `}
            onClick={copyPass}
          >
            {" "}
            copy
          </button>
        </div>
        <div className=" flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={len}
              className="cursor-pointer"
              onChange={(e) => {
                setlen(e.target.value);
              }}
            />
            <label> Length : {len}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numIn}
              id="numberIN"
              onChange={() => {
                setnumIn((prev) => !prev);
              }}
            />
            <label htmlFor="numberIN"> Number</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charIn}
              id="characterIN"
              onChange={() => {
                setcharIn((prev) => !prev);
              }}
            />
            <label htmlFor="characterIn"> Charaters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
