import React from 'react';
import Header from './components/Header';
import './App.css'

// Keep these?
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navigation';
import Footer from './components/Footer';
import AboutMe from './components/pages/About';

function App() {
  return (
    <div className='container'>
      <Header />
      <Navbar />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
