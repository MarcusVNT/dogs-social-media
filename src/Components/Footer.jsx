import React from "react";
import styles from "./Footer.module.css";
import DogsFooter from "../Assets/dogs-footer.svg?react";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <DogsFooter />
      <p>Dogs. Alguns direitos reservados.</p>
    </section>
  );
};

export default Footer;
