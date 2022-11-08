import React from "react";
import ProfilePicture from "../../assets/me.jpg";

export default function AboutMe() {
  return (
    <section>
      <h1 className="aboutHead">About Me</h1>
      <img src={ProfilePicture} alt="me" className="aboutPic"></img>
      <div>
        <p className="aboutP">
          I was raised in San Diego but for the past decade I've been in
          Colorado. For the past few years I've been in the solar industry and
          the tree industry. Earlier this year I started looking into coding and
          shortly after I found myself in a coding bootcamp through MSU.
          <br />
          <br />
          After graduation I plan on purusing a career in full stack
          development. This bootcamp has been fantastic, the more I learn the
          more I look forward to starting.
        </p>
      </div>
    </section>
  );
}
