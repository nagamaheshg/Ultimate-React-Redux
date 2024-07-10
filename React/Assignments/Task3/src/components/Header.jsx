import styles from "./Header.module.css";

const Header = ({ userName, profession }) => {
  return (
    <>
      <header className={styles.homeHeader}>
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi, I'm {userName}, a passionate {profession}!
        </p>
      </header>
    </>
  );
};

export default Header;
