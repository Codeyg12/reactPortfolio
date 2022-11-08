import React from "react";

export default function Navbar({ changePage }) {
  return (
    <nav className="navbar">
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
