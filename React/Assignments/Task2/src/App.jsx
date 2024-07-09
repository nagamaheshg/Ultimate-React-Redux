import About from "./components/About";
import profile_pic from "./assets/profile_pic.jpeg";
import styles from './App.module.css';

const App = () => {
  const user = {
    name: "Naga Mahesh Gatta",
    imageUrl: profile_pic,
    imageSize: 90,
  };
  return (
    <>
      <h1>{user.name}</h1>
      <img src={user.imageUrl} className={styles.avatar} />
    </>
  );
};

export default App;
