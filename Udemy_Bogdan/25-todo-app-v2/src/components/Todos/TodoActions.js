import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';
function TodoActions({ resetTodo, deleteCompletedTodos }) {
  return (
    <>
      <Button
        title="Reset Todos"
        onClick={resetTodo}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear Completed Todos"
        onClick={deleteCompletedTodos}>
        <RiDeleteBin2Line />
      </Button>
    </>
  );
}
export default TodoActions;
