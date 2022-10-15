import React from 'react';
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
  return (
    <div className='container'>
      <Header />
      <Navbar />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
