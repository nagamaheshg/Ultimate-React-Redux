import React from "react";
import styles from "./Home.module.css";
import { useState } from "react";
import SkillsList from "./SkillsList";
import Header from "./Header";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  const [userName, setUserName] = useState("Naga Mahesh Gatta");
  const [profession, setProfession] = useState("SDET");
  const [field, setField] = useState("Automation");
  const [skills, setSkills] = useState([
    "JavaScript",
    "React",
    "Node.js",
    "HTML&CSS",
    "Python",
    "Other Relevant Skills",
  ]);
  const [myprojects, setProjects] = useState([
    {
      h3: "Project One",
      p: "A brief description of Project One and the technologies used.",
    },
    {
      h3: "Project Two",
      p: "A brief description of Project Two and the technologies used.",
    },
  ]);

  return (
    <div className={styles.home}>
      <Header userName={userName} profession={profession} />

      <section className={styles.homeAbout}>
        <AboutMe profession={profession} field={field} />
      </section>

      <section className={styles.homeSkills}>
        <h2>Skills</h2>
        <ul>
          {skills.map((skill) => (
            <SkillsList key={skill} mySkill={skill} />
          ))}
        </ul>
      </section>

      <section className={styles.homeProjects}>
        <h2>Projects</h2>
        {myprojects.map((project) => (
          <Projects key={project} h3={project.h3} p={project.p} />
        ))}
      </section>

      <section className={styles.homeContact}>
        <Contact />
      </section>
    </div>
  );
};

export default Home;
