import styles from "./Todo.module.css";
function Todo({ todo }) {
  // передача динамически в компонент тодо
  return (
    <div className={styles.todo}>
      <div className={styles.todoText}>{todo}</div>
    </div>
  );
}
export default Todo;
