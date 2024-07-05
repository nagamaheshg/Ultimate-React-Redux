import Item from "./Item";

const FoodItems = ({ items, handleBuyButtonClicked }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          fooditem={item}
          handleBuyButtonClicked={() => console.log(`${item} bought`)}
        />
      ))}
    </ul>
  );
};

export default FoodItems;
