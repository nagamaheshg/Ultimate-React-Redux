
const MyButton = ({ count, onClick }) => {
  return (
    <>
      <button onClick={onClick}>Click Me {count} Times</button>
    </>
  );
};

export default MyButton;
