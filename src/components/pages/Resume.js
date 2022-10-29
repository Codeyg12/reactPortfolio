import React from "react";

const styles = {
  container: {
    display: "grid",
    margin: "0 -5% 5% 2%",
  },
  header: {
    fontSize: "2em",
    gridColumn: "span 3",
    marginLeft: "14%",
  },
  subHeader: {
    fontSize: "1.3em",
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "1em",
  },
  btn: {
    marginTop: "2%",
    background: "white",
    width: "60%",
    height: "2.5em",
    borderStyle: 'none'
  },
  heading: {
    textAlign: "center",
  },
};

// These two functions act as a "hover" 
function hover(e) {
  e.target.style.color = "red";
  e.target.style.fontSize = "1.3em";
}

function unhover(e) {
  e.target.style.color = "black";
  e.target.style.fontSize = "1em";
}

// Used so my resume is downloadable
function resumePDF() {
  fetch("codeyResume.pdf").then((res) => {
    res.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);
      let newLink = document.createElement("a");
      newLink.href = fileURL;
      newLink.download = "codeyResume.pdf";
      newLink.click();
    });
  });
}

export default function Resume() {
  return (
    <section style={styles.container}>
      <h1 style={styles.header}>Resume</h1>
      <div style={styles.heading}>
        <h2>Codey Gallup</h2>
        <p>Aspiring full stack developer</p>
        <a
          style={styles.link}
          onMouseEnter={hover}
          onMouseLeave={unhover}
          href="https://my.indeed.com/p/codeyg-jl644zf"
          target="_blank"
          rel="noreferrer"
        >
          Click here to go to my Indeed resume
        </a>
        <br></br>
        <p>Or</p>
        <button
          style={styles.btn}
          onMouseEnter={hover}
          onMouseLeave={unhover}
          onClick={resumePDF}
        >
          Download here
        </button>
      </div>

      <div>
        <h3 style={styles.subHeader}>Technologies</h3>
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
        <h3 style={styles.subHeader}>Certificates</h3>
        <ul>
          <li>freeCodeCamp Responsive Web Design</li>
          <li>Grasshopper: Learn to Code</li>
          <li>
            Sololearn Course
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
  );
}
