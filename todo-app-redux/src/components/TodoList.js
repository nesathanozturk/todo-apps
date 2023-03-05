import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <ul>
      {todos && todos.length > 0 ? (
        todos.map((todoItem) => {
          return (
            <div>
              <TodoItem
                key={todoItem.id}
                id={todoItem.id}
                title={todoItem.title}
                completed={todoItem.completed}
              />
            </div>
          );
        })
      ) : (
        <p className="w-80 bg-white mt-3 mx-auto p-[0.4rem] text-black text-center text-2xl rounded-md max-mobile:text-xl">
          There is nothing to do!
        </p>
      )}
    </ul>
  );
};

export default TodoList;
