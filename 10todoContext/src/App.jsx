import { useState, useEffect } from "react";
import { TodoProvider } from "./contexts";

import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, settodos] = useState([]);
  const addTodo = (todo) => {
    settodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    settodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
    /* apply loop to go to each element and find its id
    if the id matches the given id, add the new todo , else leave the previous todo */
  };

  const deleteTodo = (id) => {
    settodos((prev) => prev.filter((todo) => todo.id !== id));
    /* prev.filter((todo)=>todo.id !==id) , this means that the ids which do not match
    the given id will keep coming and if it matches , it will be left there(removed) */

    /* map is not a good syntax to use heer, as we have to create a new array and 
    return the values by removing the given todo by id
    */
  };

  const toggleTodo = (id) => {
    settodos(
      (prev) =>
        prev.map((prevTodo) =>
          prevTodo.id === id
            ? { ...prevTodo, completed: !prevTodo.completed }
            : prevTodo
        )
      /*  prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )   
          this means that access the 'completed' property inside the todos, and then by
          ...prevTodo, completed: !prevTodo.completed , '!' if the value is false it will be true
          */
    );
  };

  //  local storage
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    // JSON.parse to get in json format , else we will get string

    if (todos && todos.length > 0) {
      settodos(todos);
    }
    // we can also use multiple useEffects
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    // JSON.stringify to convert the json format to string
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleTodo }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            
            {todos.map((todo) => (
              <div key={todo.id}>
                <TodoItem todo={todo} />
              </div>

            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
