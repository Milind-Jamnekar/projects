"use client";

import { useState } from "react";
import { Todo } from "./Todo";

export interface TodoType {
  title: string;
  isComplete: boolean;
}

const initial: TodoType[] = [
  { title: "complete this todo app ⭐", isComplete: false },
  { title: "deploy this app ☁", isComplete: false },
  { title: "tell everyone on about it 🎭", isComplete: false },
];

export default function TodoApp() {
  const [todos, setTodos] = useState(initial);

  return (
    <div className="card max-w-md mx-auto bg-base-100 shadow-xl border-slate-100">
      <h1 className="text-3xl text-center">Todo App</h1>
      <div className="card-body">
        <h2 className="card-title text-xl">Todos 📝</h2>
        {/* <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}

        {todos.map((todo) => (
          <Todo key={todo.title} {...todo} />
        ))}
      </div>
    </div>
  );
}
