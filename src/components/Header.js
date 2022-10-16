import React, { useState } from "react";
import "../styles/Header.css";
import AboutMe from "./pages/About";
import ContactMe from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

const styles = {
  headerStyle: {
    background: "#00beef",
  },
  headingStyle: {
    fontSize: "8em"
  },
};

export default function Header() {
  
  return (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Codey Gallup</h1>
    </header>
  );
}
