import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

function Main() {
  return (
    <main className="m-0 p-0 font-poppins list-none">
      <TodoForm />
      <TodoList />
    </main>
  );
}

export default Main;
