import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import './App.css';

function App() {
  // чтобы изменять состояние
  const [todos, setTodos] = useState([]);
  // мы должны передавать обновленный массив задач
  // просто добавлять задачи и не знать чтобы было добавлено
  // параметр текст для новой задачи
  const addTodoHandler = (text) => {
    // спрет оператор с добавлением нового элемента текст
    // сначала идут новые задачи
    // вместо строк установили массив объектов
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    };
    // console.log(newTodo)
    setTodos([...todos, newTodo]);
  };
  // каждая задача будет объектом, чтобы генерировать необходим айд
  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    // setTodos(todos.filter((_, idx) => idx !== index)); avant
  };

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      }),
    );
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
    </div>
  );
}

export default App;
