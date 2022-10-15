import React from "react";
import '../styles/Navbar.css'

const styles = {
    navbarStyle: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        background: '#00beef'
    },
};

export default function Navbar() {
    return (
        <nav style={styles.navbarStyle} className='navbar'>
            <a href="/">About Me</a>
            <a href="/">Portfolio</a>
            <a href="/">Contact</a>
            <a href="/">Resume</a>
        </nav>
    );
}