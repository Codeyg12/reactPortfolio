import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from "@fortawesome/free-solid-svg-icons";

const styles = {
    border: {
        width: '90%',
    },
    img: {
        width: '85%',
        height: '85%',
    },
    title: {
        fontSize: '1.2em',
        fontWeight: 'bold'
    },
    icon: {
        fontSize: '2em',
        margin: '0 5%',
        color: 'black'
    }
}

export default function Card(props) {
    function showDetails(e) {
        console.log(e)
        e.target.style.width = '100%'
        e.target.style.height = '100%'
    }
    
    function hideDetails(e) {
        e.target.style.width = '85%'
        e.target.style.height = '85%'
    }

  return (
    <div style={styles.border}>
      <div>
        <h2>{props.name}</h2>
      </div>
      <div>
        <figcaption style={styles.title}>{props.title}</figcaption>
        <img style={styles.img} src={props.image} onMouseEnter={showDetails} onMouseLeave={hideDetails}></img>
      </div>
      <div>
        <a style={styles.icon} href={props.github}><FontAwesomeIcon icon={faGithub} /></a>
        <a style={styles.icon} href={props.link}><FontAwesomeIcon icon={faLink} /></a>
      </div>
    </div>
  );
}
