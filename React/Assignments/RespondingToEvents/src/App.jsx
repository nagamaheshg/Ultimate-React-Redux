import MyButton from "./components/MyButton";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleOnClickEvent = (event) => {
    console.log(event);
    setCount(count + 1);
  };

  return (
    <>
      <h1>Responding To Events</h1>
      <MyButton count={count} onClick={handleOnClickEvent} />
      <MyButton count={count} onClick={handleOnClickEvent} />
    </>
  );
};

export default App;
