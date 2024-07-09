import styles from "./Projects.module.css";

const Projects = ({ h3, p }) => {
  return (
    <>
      <h2>Projects</h2>
      <div className={styles.project}>
        <h3>{h3}</h3>
        <p>{p}</p>
      </div>
    </>
  );
};

export default Projects;
