import styles from "./SearchBox.module.css";

const SearchBox = ({handleOnChange}) => {
 
  return (
    <>
      <input
        className={styles.searchBox}
        type="text"
        placeholder="Enter food item"
        onChange={handleOnChange}
      />
    </>
  );
};

export default SearchBox;
