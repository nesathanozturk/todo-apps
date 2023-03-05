import { useDispatch } from "react-redux";
import { isCompleted, removeTodo } from "../redux/features/todo/todoSlice";
import { AiFillDelete } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";

function TodoItem({ id, title, completed }) {
  const dispatch = useDispatch();

  return (
    <div>
      <li className={completed ? "done" : ""}>
        {title}
        <button
          className="ml-auto text-purple-600 mr-1 text-xl"
          onClick={() => dispatch(isCompleted({ id, completed: !completed }))}
        >
          <AiFillCheckCircle />
        </button>
        <button
          className="mr-1 text-red-600 text-xl"
          onClick={() => dispatch(removeTodo({ id }))}
        >
          <AiFillDelete />
        </button>
      </li>
    </div>
  );
}

export default TodoItem;
