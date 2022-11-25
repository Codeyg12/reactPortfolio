import React, { useEffect } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navigation";
import Footer from "./components/Footer";
import { About, Contact, Project, Resume } from "./components/pages";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  useEffect(() => {
    document.title = "Codey's Portfolio";
  }, []);

  return (
    <div className="container">
      <Header />
      <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Project />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
