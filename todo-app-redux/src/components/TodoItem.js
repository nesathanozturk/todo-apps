import { AiFillDelete } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";

import { isCompleted, removeTodo } from "../store/slices/todoSlice";

function TodoItem({ todos }) {
  const dispatch = useDispatch();

  const renderedTodoItem = todos.map((todo) => {
    const handleCompleted = () => {
      dispatch(isCompleted({ id: todo.id, completed: !todo.completed }));
    };

    const handleRemoveTodo = () => {
      dispatch(removeTodo(todo.id));
    };

    return (
      <li key={todo.id} className={todo.completed && "done"}>
        {todo.title}
        <button
          className="ml-auto text-purple-600 mr-1 text-xl"
          onClick={() => dispatch(isCompleted(handleCompleted))}
        >
          <AiFillCheckCircle />
        </button>
        <button
          className="mr-1 text-red-600 text-xl"
          onClick={handleRemoveTodo}
        >
          <AiFillDelete />
        </button>
      </li>
    );
  });

  return renderedTodoItem;
}

export default TodoItem;
