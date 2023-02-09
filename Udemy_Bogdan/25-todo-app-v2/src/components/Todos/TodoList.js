import Todo from "./Todo";
import styles from "./TodoList.module.css";
// использование тудушки как компонента

// деструктуризация тодо получение доступа к массиву строк,
// чтобы выполнить итерацию и показать все элементы

function TodoList({ todos, deleteTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {/*перевод в правду с помощью восклицания*/}
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} index={index} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}

export default TodoList;
