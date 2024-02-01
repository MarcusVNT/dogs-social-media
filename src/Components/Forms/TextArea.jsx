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
}) => {
  return (
    <div>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <textarea
        id={id}
        name={name}
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
