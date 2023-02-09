import Todo from "./Todo";
// использование тудушки как компонента

// деструктуризация тодо получение доступа к массиву строк
// чтобы выполнить итерацию и  показать все элементы

function TodoList({ todos }) {
  return todos.map((todo, index) => <Todo key={index} todo={todo} />);
}

export default TodoList;
