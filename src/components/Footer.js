import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="list">
        <a
          href="https://github.com/Codeyg12"
          alt="Github logo"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithubSquare} className="icon" />
        </a>
        <a
          href="https://linkedin.com/in/codey-gallup"
          alt="LinkedIn logo"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="icon" />
        </a>
        <a
          href="https://stackoverflow.com/users/18817205/codeyg12"
          alt="StackOverflow logo"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faStackOverflow} className="icon" />
        </a>
      </ul>
    </footer>
  );
}
