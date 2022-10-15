import React from "react";
import '../styles/Header.css'

const styles = {
    headerStyle: {
        background: '#00beef',
    },
    headingStyle: {
        fontSize: '10em',
    }
}

export default function Header() {
    return (
        <header style={styles.headerStyle} className="header">
            <h1 style={styles.headingStyle}>Codey</h1>
        </header>
    )
}