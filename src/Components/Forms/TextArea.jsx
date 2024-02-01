import React from "react";
import styles from "./TextArea.module.css";

const TextArea = ({ value, onChange, rows, error, placeholder }) => {
  return (
    <div>
      <textarea
        className={styles.textarea}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default TextArea;
