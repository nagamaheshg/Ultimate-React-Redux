import React from "react";
import logo from "../assets/logo.jpeg";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <img src={logo} alt="Logo" />
      </div>
      <ul className={styles.navbarLinks}>
        <li className={styles.home}>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/technologies">Technologies</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
