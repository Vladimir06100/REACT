import { useState } from 'react';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
