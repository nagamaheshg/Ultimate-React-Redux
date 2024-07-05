import styles from "./ButtonContainer.module.css";
import Button from "./Button";

const ButtonContainer = ({ buttons }) => {
  return (
    <>
      <div className={styles.buttonContainer}>
        {buttons.map((button) => (
          <Button key={button} button={button} />
        ))}
      </div>
    </>
  );
};
export default ButtonContainer;
