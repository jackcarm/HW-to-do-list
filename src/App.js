import React, { useState } from 'react'
import './App.css';

function App() {

  const [todos, setTodos] = useState([
    "Buy Shopping",
    "Clean Bathroom",
    "Car's MOT"

  ]);

  const todoNodes = todos.map((todo) => {
    return (
      <li>
        <span>{todo}</span>
      </li>

    )
  });

  const [newTodo, setNewTodo] = useState("");

  const handleTodoInput = (evt) => {
    setNewTodo(evt.target.value);
  }

  const saveNewTodo = (evt) => {
    evt.preventDefault();
    const copyTodos = [...todos];
    copyTodos.push(newTodo)
    setTodos(copyTodos)
    setNewTodo("");
  };






  return (
    <div className="App">

      <h1>To-do List</h1>


      <form onSubmit={saveNewTodo}>
        <label htmlFor="new-todo">Add new task:</label>
        <input id="new-todo" type="text" value={newTodo} onChange={handleTodoInput} />
        <input type="submit" value="Save Task" />
      </form>

      <ul>
        {todoNodes}
      </ul>



    </div>
  );


}

export default App;
