import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function Card(props) {
  // Used to expand pictures, later will be upgraded
  function showDetails(e) {
    console.log(e);
    e.target.style.width = "100%";
    e.target.style.height = "100%";
  }

  function hideDetails(e) {
    e.target.style.width = "85%";
    e.target.style.height = "85%";
  }

  return (
    <div className="cardBorder">
      <div>
        <h2>{props.name}</h2>
      </div>
      <div>
        <figcaption className="cardTitle">{props.title}</figcaption>
        <img
          className="cardImg"
          src={props.image}
          alt="project"
          onMouseEnter={showDetails}
          onMouseLeave={hideDetails}
        ></img>
      </div>
      <div>
        <a
          className="cardIcon"
          href={props.github}
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          className="cardIcon"
          href={props.link}
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLink} />
        </a>
      </div>
    </div>
  );
}
