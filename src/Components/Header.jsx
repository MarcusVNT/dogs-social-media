import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div style={styles.header}>
      <nav className="container">
        <Link to="/">Home</Link>
        <Link to="/Login">Login</Link>
        <Link to="/About">About</Link>
      </nav>
    </div>
  );
};

export default Header;
