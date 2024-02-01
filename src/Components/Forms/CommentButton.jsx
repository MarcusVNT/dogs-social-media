import React from "react";
import styles from "./CommentButton.module.css";
import Enviar from "../../Assets/enviar.svg?react";

const CommentButton = ({ ...props }) => {
  return (
    <button {...props} className={styles.commentButton}>
      <Enviar />
    </button>
  );
};

export default CommentButton;
