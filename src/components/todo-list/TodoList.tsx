import React from "react";
import TodoItem from "../todo-item/TodoItem";
import "./TodoList.css";

interface Props {
  todos: ITodo[];
  toggleTodo: ToggleTodo;
  removeTodo: RemoveTodo;
}

const TodoList: React.FC<Props> = (props) => {
  const { todos, toggleTodo, removeTodo } = props;
  return (
    <div className="todo-list">
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
