import "./App.css";
import AddTodo from "./components/AddTodo.js/AddTodo";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">Todo List Redux</header>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
