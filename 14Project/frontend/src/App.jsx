import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      // .get("https://localhost:3000/api/jokes")

      // industry standard below
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log("Axios fetching error", error);
      });
  });

  return (
    <>
      <h1>Jokes APP</h1>
      <p>Jokes : {jokes.length}</p>
      {jokes.map((joke, index) => (
        <div
          key={joke.id}
          className="w-full border-2 border-gray-500 p-4 m-2 hover:scale-105 hover:rounded-md transition-all duration-300"
        >
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
