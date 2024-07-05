import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppName from "./components/AppName";
import TodoContainer from "./components/TodoContainer";
import TodoItems from "./components/TodoItems";

const App = () => {
  const todoItems = [
    { name: "Buy Milk", dueDate: "07/07/2024" },
    { name: "Goto College", dueDate: "08/07/2024" },
  ];
  return (
    <>
      <center className="todo-container">
        <AppName />
        <TodoContainer />
        <TodoItems todoItems = {todoItems}/>
      </center>
    </>
  );
};

export default App;
