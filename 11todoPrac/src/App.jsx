import { useState,useEffect } from "react";
import { TodoProvider } from "../../10todoContext/src/contexts";
import TodoF from "./components/TodoF";
import TodoIn from "./components/TodoIn";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  //give an empty array

  // first function
  /* so firstly we check if any previous todos or not, then if present or not 
  we add our todo */

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  // second function
  /* for updating the todo that are they completed or not
   give id and todo both */

  const updateTodo = (id, todo) => {
    setTodos((prev) => (prev.id === id ? todo : prev));
  };

  // third function
  /* for deleting the todo, give id only */
  const deleteTodo = (id, todo) => {
    setTodos((prev) => prev.filter((todo) => todo.id != id));
  };

  const toggleTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  /*
   const toggleTodo = (id, todo) => {
  setTodos((prev) =>  // Update the to-do list
    prev.map((prevTodo) => // Loop through each to-do item
      prevTodo.id === id // Check if it's the one we want to update
        ? { ...prevTodo, completed: !prevTodo.completed } // Toggle completed
        : prevTodo // Otherwise, keep it the same
    )
  );
};
*/

  // for local storage
  // this is for to store the data in the local storage, and it not changes even on page reloading

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todds", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleTodo }}
    >
      {/* the provider always needs a value, which will come from the context */}
      {/* The provider needs a `value` to share data and functions with its children. */}

      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoF />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id}>
                <TodoIn todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
