import Item from "./Item";

const FoodItems = ({items}) => {
   
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} fooditem={item} />
      ))}
    </ul>
  );
};

export default FoodItems;
