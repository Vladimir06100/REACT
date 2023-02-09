import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';
import styles from './TodoActions.module.css';
function TodoActions({ resetTodo, deleteCompletedTodos, completedTodosExist }) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button
        title="Reset Todos"
        onClick={resetTodo}>
        <RiRefreshLine />
      </Button>
      <Button
        disabled={!completedTodosExist}
        title="Clear Completed Todos"
        onClick={deleteCompletedTodos}>
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}
export default TodoActions;
