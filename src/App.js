import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navigation";
import Footer from "./components/Footer";
import AboutMe from "./components/pages/About";
import ContactMe from "./components/pages/Contact";
import Resume from "./components/pages/Resume";
import Project from "./components/Project";
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
        return <ContactMe />;
      case "portfolio":
        return <Project />;
      case "resume":
        return <Resume />;
      default:
        return <AboutMe />;
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
