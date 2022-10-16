import React from "react";
import "../styles/Header.css";

const styles = {
  headerStyle: {
    background: "#111893",
  },
  headingStyle: {
    fontSize: "8em",
  },
};

export default function Header() {
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Codey Gallup</h1>
    </header>
  );
}
