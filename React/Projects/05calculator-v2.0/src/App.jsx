import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";

const App = () => {
  const [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <>
      <h1>Calculator</h1>
      <div className={styles.calculator}>
        <Display displayValue={calVal} />
        <ButtonContainer onButtonClick={onButtonClick} />
      </div>
    </>
  );
};
export default App;
