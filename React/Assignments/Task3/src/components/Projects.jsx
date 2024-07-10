import styles from "./Projects.module.css";

const Projects = ({ h3, p }) => {
  return (
    <>
      <div className={styles.project}>
        <h3>{h3}</h3>
        <p>{p}</p>
      </div>
    </>
  );
};

export default Projects;
