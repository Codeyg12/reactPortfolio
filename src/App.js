import React from 'react';
import Header from './components/Header';

// Keep these?
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navigation';

const styles = {
  divStyle: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr'
  }
}

function App() {
  return (
    <div style={styles.divStyle}>
      <Header />
      <Navbar />
    </div>
  );
}

export default App;
