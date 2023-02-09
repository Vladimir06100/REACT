import { useState } from "react";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import "./App.css";

function App() {
  // чтобы изменять состояние
  const [todos, setTodos] = useState([]);
  // мы должны передавать обновленный массив задач
  // просто добалять задачи и не знать  чтобы было добавлено
  // параметр текст для новой задачи
  const addTodoHandler = (text) => {
    // спрет оператор с добавлением ного элемента текст
    // сначала идут новые задачи
    setTodos([...todos, text]);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
