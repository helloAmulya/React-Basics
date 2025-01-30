import Chai from "./chai";
// use capital letter in Chai to make it a component

``;

function App() {
  const username = "Amulya Ratna Sharma";
  

  return (
    <>
      {/* this '<>' is a fragment, which resolves the issue for multiple component in return  */}

      <Chai />

      {/* <h1> Hello react vite | Amulya Ratna Sharma </h1> */}

      <h1> Hello react vite | {username} </h1>
      {/* this is an evaluated expression -> {username}, cannot use, if and for etc., inside return */}
    </>
  );
}

export default App;
