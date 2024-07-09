import styles from "./SearchBox.module.css";

const SearchBox = ({handleKeyDown}) => {
 
  return (
    <>
      <input
        className={styles.searchBox}
        type="text"
        placeholder="Enter food item"
        onKeyDown={handleKeyDown}
      />
    </>
  );
};

export default SearchBox;
