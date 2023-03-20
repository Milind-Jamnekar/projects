import { TodoType } from "../TodoApp";

// interface ITodo extends TodoType {
//     update
// }

export default function Todo({ isComplete, title }: TodoType) {
  return (
    <div className="flex gap-3 py-2 items-center hover:bg-neutral px-5 rounded-xl">
      <input className="checkbox" type="checkbox" name="todo" id={title} />
      <label
        htmlFor={title}
        className={`text-lg ${isComplete && "line-through"}`}
      >
        {title}
      </label>
    </div>
  );
}
