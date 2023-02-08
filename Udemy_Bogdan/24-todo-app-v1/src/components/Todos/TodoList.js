import Todo from './Todo';

function TodoList({ todos }) {
  return todos.map((todo, index) => <Todo key={index} todo={todo} />);
}

export default TodoList;
