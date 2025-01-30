// import { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import React from "react";

function MyApp() {
  return (
    <div>
      <h1>custom app</h1>
    </div>
  );
}

// this is how react element looks like, but this will not work in react if we try to render it
// beacuse react does not understand this object, it only understands jsx ( this is the next stage where the function will be converted like this)
/*
const ReactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Click to visit google",
};
*/

const anotherElement = (
  <a href="https://www.google.com" target="_blank">
    Visit Google
  </a>
);
const anotherUser = "Amulya Ratna Sharma";

const reactElement = React.createElement(
  "a",
  { href: "https://www.google.com", target: "_blank" },
  "Click me to visit google | ",
  anotherUser
);


createRoot(document.getElementById("root")).render(

  // <App />

  // {/* <MyApp /> */}
  // anotherElement,
  reactElement
);
