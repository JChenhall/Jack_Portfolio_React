import React from 'react'
import styles from './NavBar.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faLaptop, faPalette, faUserAlt, faAddressBook  } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';


const NavBar = (props) => {


    return (
  <nav className= {styles.navBar}>
    <div className={styles.brandTitle}>
      JC
    </div>
    <div className={styles.navbarLinks}>
      <ul>
        <li><a href="#section1"><FontAwesomeIcon icon={faHome}/> <br/>Home</a></li>
        <li><a href="#section2"><FontAwesomeIcon icon={faLaptop}/><br/>Skills</a></li>
        <li><a href="#section3"><FontAwesomeIcon icon={faPalette}/><br/>Projects</a></li>
        <li><a href="#section4"><FontAwesomeIcon icon={faUserAlt}/><br/>About</a></li>
        <li><a href="#section5"><FontAwesomeIcon icon={faAddressBook}/><br/>Contact</a></li>
      </ul>
    </div>
  </nav>
    )
}

export default NavBar;
