import styles from "./Item.module.css";

const Item = ({ fooditem }) => {
  return (
    <>
      <li
        className={`${
          styles["app-food-item"]
        } list-group-item`}
      >
        {fooditem}
      </li>
    </>
  );
};

export default Item;
