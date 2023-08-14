import { useSelector } from "react-redux";

import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <ul>
      {todos.length > 0 ? (
        <TodoItem todos={todos} />
      ) : (
        <p className="w-80 bg-white mt-3 mx-auto p-[0.4rem] text-black text-center text-2xl rounded-md max-mobile:text-xl">
          There is nothing to do!
        </p>
      )}
    </ul>
  );
};

export default TodoList;
