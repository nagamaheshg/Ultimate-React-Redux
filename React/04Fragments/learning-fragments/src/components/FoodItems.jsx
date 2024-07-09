import Item from "./Item";
import { useState } from "react";

const FoodItems = ({ items, handleBuyButtonClicked }) => {
  const [activeItems, setActiveItems] = useState([]);

  const onBuyButton = (item, event) => {
    const newItems = [...activeItems, item];
    setActiveItems(newItems);
  };
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          fooditem={item}
          bought={activeItems.includes(item)}
          handleBuyButtonClicked={(event) => onBuyButton(item, event)}
        />
      ))}
    </ul>
  );
};

export default FoodItems;
