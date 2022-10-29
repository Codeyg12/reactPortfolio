import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navigation";
import Footer from "./components/Footer";
import { About, Contact, Project, Resume } from './components/pages'
import "./App.css";

function App() {
  useEffect(() => {
    document.title = "Codey's Portfolio";
  }, []);
  const [currentPage, setCurrentPage] = useState("about");

  // Switch statment to render the clicked on page
  function loadPage() {
    switch (currentPage) {
      case "contact":
        return <Contact />;
      case "portfolio":
        return <Project />;
      case "resume":
        return <Resume />;
      default:
        return <About />;
    }
  }

  function changePage(page) {
    setCurrentPage(page);
  }

  return (
    <div className="container">
      <Header />
      <Navbar currentPage={currentPage} changePage={changePage} />
      {loadPage()}
      <Footer />
    </div>
  );
}

export default App;
