"use client";

import { useState } from "react";
import { Todo } from "./Todo";

export interface TodoType {
  id: number;
  title: string;
  isComplete: boolean;
}

const initial: TodoType[] = [
  { id: 1, title: "complete this todo app ⭐", isComplete: false },
  { id: 2, title: "deploy this app ☁", isComplete: false },
  { id: 3, title: "tell everyone on about it 🎭", isComplete: false },
];

export default function TodoApp() {
  const [todos, setTodos] = useState(initial);

  const removeTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const toggleTodo = (id: number) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isComplete: !todo.isComplete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="card max-w-md mx-auto bg-base-100 shadow-xl border-slate-100">
      <h1 className="text-3xl text-center">Todo App</h1>
      <div className="card-body">
        <h2 className="card-title text-xl">Todos 📝</h2>
        {todos.map((todo) => (
          <Todo
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
            key={todo.id}
            {...todo}
          />
        ))}
      </div>
    </div>
  );
}
