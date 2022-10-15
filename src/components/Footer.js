import React from "react";
import '../styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons'

const styles = {
    footerStyle: {
       justifyContent: 'space-around'
    }
};

export default function Footer() {
    return (
        <footer style={styles.footerStyle} className='footer'>
            <ul className="list">
                <a href="https://github.com/Codeyg12" target='_blank'><FontAwesomeIcon icon={faGithubSquare} className='icon' /></a> 
                <a href="www.linkedin.com/in/codey-gallup" target="_blank"><FontAwesomeIcon icon={faLinkedin} className='icon' /></a>
                <a href="https://stackoverflow.com/users/18817205/codeyg12" target="_blank"><FontAwesomeIcon icon={faStackOverflow} className='icon' /></a>
            </ul>
        </footer>
    )
}