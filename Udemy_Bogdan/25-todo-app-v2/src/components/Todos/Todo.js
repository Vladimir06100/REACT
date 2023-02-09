import { RiTodoFill } from "react-icons/ri";
import styles from "./Todo.module.css";
function Todo({ todo, index, deleteTodo }) {
  // передача динамически в компонент тодо
  return (
    <div onDoubleClick={() => deleteTodo(index)} className={styles.todo}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo}</div>
    </div>
  );
}
export default Todo;
