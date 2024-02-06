import React from "react";
import styles from "./TextArea.module.css";

const TextArea = ({
  label,
  value,
  onChange,
  rows,
  error,
  placeholder,
  id,
  name,
  spellcheck,
}) => {
  return (
    <div className={styles.container}>
      <textarea
        className={styles.textarea}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        spellCheck={spellcheck}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default TextArea;
