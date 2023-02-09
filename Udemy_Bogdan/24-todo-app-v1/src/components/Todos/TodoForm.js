import { useState } from "react";
import styles from "./TodoForm.module.css";
// свойство аддтобо доступно из вызова свойства Тодо в ап.жс
function TodoForm({ addTodo }) {
  // для контроля строки старт пустая строка

  const [text, setText] = useState("");
  // при отправке вызываем функцию и устраняем авто обновление страницы
  const onSubmitHandler = (event) => {
    event.preventDefault();
    // вызываем функцию аддтодо которая является свойством вызова компонента Форм
    addTodo(text);
    // обновляем значение до пустой строки для поля ввода
    setText("");
  };
  return (
    // при сабмите вызываем определенную функцию
    // создание контролируемого поля ввода
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        {/*каждый раз когда меняется инпут, меняется состояние */}
        <input
          placeholder="Enter new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TodoForm;
