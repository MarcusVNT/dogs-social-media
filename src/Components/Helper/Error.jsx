import React from "react";

const Error = ({ error }) => {
  if (!error) return null;
  return (
    <p style={{ color: "#f31", margin: "1rem 1rem", fontWeight: "bold" }}>
      {error}
    </p>
  );
};

export default Error;
