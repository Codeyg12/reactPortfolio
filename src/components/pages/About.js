import React from "react";
import ProfilePicture from "../../assets/me.jpg";

const styles = {
  headerStyle: {
    display: "flex",
    justifyContent: "center",
    marginLeft: "10%",
    fontSize: "3rem",
    width: "100%",
  },
  pStyle: {
    fontSize: "2rem",
    marginLeft: "6%",
    lineHeight: "3rem",
  },
  pictureStyle: {
    float: "left",
    margin: "0 2% 5%",
    borderRadius: "100px",
  },
};

export default function AboutMe() {
  return (
    <section>
      <h1 style={styles.headerStyle}>About Me</h1>
      <img src={ProfilePicture} style={styles.pictureStyle}></img>
      <div>
        <p style={styles.pStyle}>
          I was raised in San Diego but for the past decade I've been in
          Colorado. For the past few years I've been in the solar industry and
          the tree industry. Earlier this year I started looking into coding and
          shortly after I found myself in a coding bootcamp through MSU.
          <br></br>
          <br></br>
          After graduation I plan on purusing a career in full stack
          development. This bootcamp has been fantastic, the more I learn the
          more I look forward to starting.
        </p>
      </div>
    </section>
  );
}
