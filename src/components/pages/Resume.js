import React from "react";

const styles = {
    container: {
        display: 'grid',
        margin: '0 -5% 0 2%'
    },
    header: {
        fontSize: '2em',
        gridColumn: 'span 3' 
    },
    link: {
        textDecoration: 'none',
        color: 'black',
        fontSize: '1em'
    }
}

function hover(e) {
    e.target.style.color = 'red';
    e.target.style.fontSize = '1.3em'
}

function unhover(e) {
    e.target.style.color = 'black';
    e.target.style.fontSize = '1em'
}

export default function Resume() {
    return (
        <section style={styles.container}>
            <h1 style={styles.header}>Resume</h1>
            <div>
                <h2>Codey Gallup</h2>
                <p>Aspiring full stack developer</p>
                <a style={styles.link} onMouseEnter={hover} onMouseLeave={unhover} href="https://my.indeed.com/p/codeyg-jl644zf">→ Click here for my Indeed resume ←</a>
            </div>

            <div>
                <h3>Technologies</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Node</li>
                    <li>MySql</li>
                    <li>API</li>
                    <li>React</li>
                    <li>Git</li>
                </ul>
            </div>

            <div>
                <h3>Certificates</h3>
                <ul>
                    <li>freeCodeCamp Responsive Web Design</li>
                    <li>Grasshopper: Learn to Code</li>
                    <li>Sololearn Course
                      <ul>
                      <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>Responsive Web Design</li>
                        <li>SQL</li>
                      </ul>
                    </li>
                </ul>
            </div>

        </section>
    )
}