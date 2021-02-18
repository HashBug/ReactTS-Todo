interface ITodo {
  id: number;
  description: string;
  completed: boolean;
}

type AddTodo = (text: string) => void;

type ToggleTodo = (id: number) => void;

type RemoveTodo = (id: number) => void;
