import React from "react";
import "./TodoItem.css";

interface Props {
  todo: ITodo;
  toggleTodo: ToggleTodo;
  removeTodo: RemoveTodo;
}

const TodoItem: React.FC<Props> = (props) => {
  const { todo, toggleTodo, removeTodo } = props;
  const { id, description, completed } = todo;
  return (
    <div className="list-item">
      <li>
        <input
          className="checkbox"
          type="checkbox"
          name="completed"
          checked={completed}
          onChange={(e) => toggleTodo(id)}
        />
        <span className={completed ? "strike-through" : ""}>{description}</span>
        <button className="remove-button" onClick={(e) => removeTodo(id)}>
          &#10005;
        </button>
      </li>
    </div>
  );
};

export default TodoItem;
