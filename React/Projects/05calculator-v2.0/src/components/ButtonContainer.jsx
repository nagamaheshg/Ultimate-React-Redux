import styles from "./ButtonContainer.module.css";
import Button from "./Button";

const ButtonContainer = ({ onButtonClick }) => {
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
      <div className={styles.buttonContainer}>
        {calButtons.map((button) => (
          <Button key={button} button={button} onButtonClick={() => onButtonClick(button)}/>
        ))}
      </div>
    </>
  );
};
export default ButtonContainer;
