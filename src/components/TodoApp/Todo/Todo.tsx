import { TodoType } from "../TodoApp";

interface ITodo extends TodoType {
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

export default function Todo({
  isComplete,
  title,
  id,
  removeTodo,
  toggleTodo,
}: ITodo) {
  return (
    <div className="flex gap-3 py-2 items-center hover:bg-neutral px-5 rounded-xl">
      <input
        onChange={() => toggleTodo(id)}
        className="checkbox"
        type="checkbox"
        name="todo"
        id={title}
      />
      <label
        htmlFor={title}
        className={`text-lg ${isComplete && "line-through"}`}
      >
        {title}
      </label>
    </div>
  );
}
