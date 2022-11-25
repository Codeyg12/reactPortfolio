import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/portfolio">Projects</Link>
      <Link to="/resume">Resume</Link>
    </nav>
  );
}
