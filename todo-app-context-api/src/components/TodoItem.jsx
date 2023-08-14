import { AiFillCheckCircle, AiFillDelete } from "react-icons/ai";

import useFormContext from "../hooks/use-form-context";

function TodoItem() {
  const { list, isCompleted, removeItem } = useFormContext();

  const renderedList = list.map((item) => (
    <li key={item.id} className={item.completed && "done"}>
      {item.name}
      <button
        data-testid="completed-button"
        className="ml-auto text-purple-600 mr-1 text-xl"
        onClick={() => isCompleted(item.id)}
      >
        <AiFillCheckCircle />
      </button>
      <button
        data-testid="delete-button"
        className="mr-1 text-red-600 text-xl"
        onClick={() => removeItem(item.id)}
      >
        <AiFillDelete />
      </button>
    </li>
  ));

  return <div className="list-container">{renderedList}</div>;
}

export default TodoItem;
