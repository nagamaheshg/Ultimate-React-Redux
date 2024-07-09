import styles from "./Item.module.css";

const Item = ({ fooditem,bought, handleBuyButtonClicked }) => {

 
  return (
    <>
      <li className={`${styles["app-food-item"]} list-group-item ${bought && 'active'}`}>
        {fooditem}
        <button className={`${styles.buyButton} btn btn-info`} onClick={handleBuyButtonClicked}>Buy</button>
      </li>
    </>
  );
};

export default Item;
