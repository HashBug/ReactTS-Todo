import React, { SyntheticEvent, useState } from "react";
import "./TodoForm.css";

interface Props {
  addTodo: AddTodo;
}

const TodoForm: React.FC<Props> = ({ addTodo }) => {
  const [description, setDescription] = useState<string>("");

  const addTodoItem = (event: SyntheticEvent) => {
    event.preventDefault();
    addTodo(description);
    setDescription("");
  };

  return (
    <form className="todo-form">
      <input
        type="text"
        name="todo"
        className="todo-input"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        type="submit"
        className="add-button"
        onClick={(e) => addTodoItem(e)}
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
