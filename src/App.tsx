import React, { useState } from "react";
import TodoList from "./components/todo-list/TodoList";
import "./App.css";
import TodoForm from "./components/todo-form/TodoForm";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo: AddTodo = (text: string) => {
    const newTodo = {
      id: Math.floor(Math.random() * Date.now()),
      description: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo: ToggleTodo = (id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const removeTodo: RemoveTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
      <TodoForm addTodo={addTodo} />
    </div>
  );
};

export default App;
