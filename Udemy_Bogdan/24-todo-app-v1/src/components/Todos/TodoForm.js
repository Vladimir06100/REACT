import { useState } from "react";
// свойтсво аддтобо доступно из вызова свойства Тодо в ап.жс
function TodoForm({ addTodo }) {
  // для контроля строки старт пустая строка

  const [text, setText] = useState("");
  // при отправке вызываем функцию и устраняем авто обновление страницы
  const onSubmitHandler = (event) => {
    event.preventDefault();
    // вызываем функию аддтодо которая является свойством вызова компонента Форм
    addTodo(text);
    // обновляем значение до пустой строки для поля ввода
    setText("");
  };
  return (
    // при сабмите вызываем определенную функию
    // создание контролируемого поля ввода
    <form onSubmit={onSubmitHandler}>
      <input
        placeholder="Enter new todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default TodoForm;
