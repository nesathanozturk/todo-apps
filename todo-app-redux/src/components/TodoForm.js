import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, clearTodos } from "../redux/features/todo/todoSlice";

function TodoForm() {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Add something to do!");
    } else {
      dispatch(addTodo({ title }));
      setTitle("");
    }
  };

  return (
    <div>
      <div className="bg-white w-[34rem] mt-6 mx-auto p-6 rounded-lg max-sm:w-[26rem] max-sm-:p-4 max-mobile:w-[24rem]">
        <div>
          <h1 className="text-4xl text-center text-purple-700 uppercase font-bold tracking-widest max-sm:text-3xl">
            My Todo List
          </h1>
        </div>
        <section className="flex justify-center items-center">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={title}
              placeholder="Add something to do..."
              onChange={(e) => setTitle(e.target.value)}
              className="w-48 p-[0.5rem] mr-2 mt-5 border-2 border-gray-200 text-sm rounded-lg placeholder:text-sm focus:outline-none focus:text-gray-800 focus:text-md max-sm:w-32"
            />
            <button className="w-20 bg-purple-700 text-white mt-5 mr-2 p-[0.45rem] text-base rounded-md hover:bg-purple-900 transition-colors max-sm:w-16">
              Add
            </button>
          </form>
          <div className="w-10">
            <button
              onClick={() => dispatch(clearTodos())}
              className="w-20 bg-red-600 text-white mt-5 p-[0.6rem] text-sm rounded-md hover:bg-red-800 transition-colors max-sm:w-16 max-mobile:w-14"
            >
              Clear
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default TodoForm;
