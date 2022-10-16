import React, { useState } from 'react';
import Header from './components/Header';
import './App.css'

// Keep these?
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navigation';
import Footer from './components/Footer';
import AboutMe from './components/pages/About';
import ContactMe from './components/pages/Contact';
import Resume from './components/pages/Resume';
import Portfolio from './components/pages/Portfolio';

function App() {
  const [currentPage, setCurrentPage] = useState("about");

  function loadPage() {
    switch (currentPage) {
      case "contact":
        return <ContactMe />;
      case "portfolio":
        return <Portfolio />;
      case "resume":
        return <Resume />;
      default:
        return <AboutMe />;
    }
  }

  function changePage(page) {
    setCurrentPage(page)
  }

  return (
    <div className='container'>
      <Header />
      <Navbar currentPage={currentPage} changePage={changePage} />
      {loadPage()}
      <Footer />
    </div>
  );
}

export default App;
