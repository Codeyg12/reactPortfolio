import React from "react";
import "../styles/Navbar.css";

const styles = {
  navbarStyle: {
    justifyContent: "space-evenly",
    alignItems: "center",
    background: "#111893",
  },
};

export default function Navbar({ changePage }) {
  return (
    <nav style={styles.navbarStyle} className="navbar">
      <a href="#about" onClick={() => changePage("about")}>
        About Me
      </a>
      <a href="#portfolio" onClick={() => changePage("portfolio")}>
        Portfolio
      </a>
      <a href="#contact" onClick={() => changePage("contact")}>
        Contact
      </a>
      <a href="#resume" onClick={() => changePage("resume")}>
        Resume
      </a>
    </nav>
  );
}
