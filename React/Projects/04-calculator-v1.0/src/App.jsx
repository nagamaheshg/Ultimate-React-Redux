import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";

const App = () => {
  const calButtons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    ".",
    "%",
    "0",
    "=",
  ];
  return (
    <>
      <h1>Calculator</h1>
      <div className={styles.calculator}>
        <Display />
        <ButtonContainer buttons={calButtons} />
      </div>
    </>
  );
};
export default App;
