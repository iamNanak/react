import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
function App() {
  return (
    <>
      <h1 className="flex justify-center items-center text-3xl font-semibold">
        Redux Toolkit Todo
      </h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
