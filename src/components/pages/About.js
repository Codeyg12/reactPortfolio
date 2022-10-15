import React from "react";

const styles = {
    headerStyle: {
        display: 'flex',
        justifyContent: 'flex-start',
        marginLeft: '10%',
        fontSize: '3rem',
        width: '100%'
    },
    pStyle: {
        fontSize: '1.5rem',
        marginLeft: '6%'
    }
}

export default function AboutMe() {
    return (
        <section>
            <h1 style={styles.headerStyle}>About Me</h1>
            <img src='../../assets/me.jpg'></img>
            <div>
                <p style={styles.pStyle}>
                    &nbsp; I was raised in San Diego but for the past decade I've been in Colorado. For the past few years I've been in the solar industry and the tree industry. Earlier this year I started looking into coding and shortly after I found myself in a coding bootcamp through MSU.
                <br></br>
                &nbsp; After graduation I plan on purusing a career in full stack development. This bootcamp has been fantastic, the more I learn the more I look forward to starting. 
                     </p>
            </div>
        </section>
    )
}