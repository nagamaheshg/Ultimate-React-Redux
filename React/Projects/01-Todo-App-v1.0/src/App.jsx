import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import AppName from "./components/AppName";
import TodoContainer from "./components/TodoContainer";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";

const App = () => {
  return (
    <>
      <center className="todo-container">
        <AppName />
        <TodoContainer />
        <TodoItem1 />
        <TodoItem2 />
      </center>
    </>
  );
};

export default App;
