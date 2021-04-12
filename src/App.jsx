import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import { Parallax } from 'react-parallax';
import image1 from './images/Background/sky.jpg';
import image2 from './images/Background/coast.jpg';
import image3 from './images/Background/stringbridge3.jpg';
import image4 from './images/Background/citybridge.jpg';
import image5 from './images/Background/feather.jpg';
import image6 from './images/Background/keyboard.jpg';
import styles from './App.module.scss';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import HeroScreen from './components/HeroScreen';
import Projects from './components/Projects';
import NavBar from './components/NavBar';
import SoftwareSkills from './components/SoftwareSkills'
import { faHome, faLaptop, faPalette, faUserAlt, faAddressBook  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DownArrow from './components/DownArrow';
import{ BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//Arrow Functionallity
const scrollWin = () => {
  window.scrollBy({  
    top: 1200,
    left: 0,
    behavior: 'smooth'});
}
const hero = () => {
  let elmnt = document.getElementById("section1");
  elmnt.scrollIntoView();
}
const skills = () => {
  let elmnt = document.getElementById("section2");
  elmnt.scrollIntoView();
}
const projects = () => {
  let elmnt = document.getElementById("section3");
  elmnt.scrollIntoView();
}
const aboutMe = () => {
  let elmnt = document.getElementById("section4");
  elmnt.scrollIntoView();
}
const contactMe = () => {
  let elmnt = document.getElementById("section5");
  elmnt.scrollIntoView();
}

const App = () => {
  return (
    <>
     <body>
       <NavBar hero={hero} skills={skills} projects={projects} aboutMe={aboutMe} contactMe={contactMe}/>
          <Parallax bgImage = {image1} strength={1000} blur={1,6} className={styles.ParallaxStyle} >
              <div className = {styles.interWrap} id="section1">
                <div className = {styles.interContent}>
                  <FontAwesomeIcon icon={faHome}/>  WELCOME
                  <DownArrow scrollWin = {scrollWin}/> 
                </div>
              </div>
            
          </Parallax>
            <section className={styles.contentSection} >
            
              <HeroScreen />
              
            </section>
          <Parallax bgImage = {image2} strength={-500} className={styles.ParallaxStyle} >
            <div className = {styles.interWrap} id="section2">
              <div className = {styles.interContent}>
                <FontAwesomeIcon icon={faLaptop}/>  SOFTWARE SKILLS
                <DownArrow scrollWin = {scrollWin}/>
              </div>
            </div>
          </Parallax>
            <section className={styles.contentSection}>
            
              <SoftwareSkills />
              
            </section>
          <Parallax bgImage = {image3} strength={-500} className={styles.ParallaxStyle} >
              <div className = {styles.interWrap} id="section3">
                <div className = {styles.interContent}>
                  <FontAwesomeIcon icon={faPalette}/>  PROJECTS
                  <DownArrow scrollWin = {scrollWin}/>
                </div>
              </div>
            
          </Parallax>
            <section className={styles.contentSection}>
            
              <Projects />
              
            </section>
          <Parallax bgImage = {image4} strength={-500} className={styles.ParallaxStyle} >
              <div className = {styles.interWrap} id="section4">
                <div className = {styles.interContent}>
                  <FontAwesomeIcon icon={faUserAlt}/>  ABOUT ME
                  <DownArrow scrollWin = {scrollWin}/>
                </div>
              </div>
            
          </Parallax>
            <section className={styles.contentSection}>
            
              <AboutMe />
              
            </section>
          <Parallax bgImage = {image6} strength={-500} className={styles.ParallaxStyle} >
              <div className = {styles.interWrap} id="section5">
                <div className = {styles.interContent}>
                  <FontAwesomeIcon icon={faAddressBook}/>  CONTACT ME
                  <DownArrow scrollWin = {scrollWin}/>
                </div>
              </div>
            
          </Parallax>
            <section className={styles.contentSection}>
            
              <ContactMe />
              
            </section>
          <Parallax bgImage = {image5} strength={-500} className={styles.ParallaxStyle}>
            <div className = {styles.interWrap}>
              <div>
                <div className = {styles.interContent}>HEAR FROM YOU SOON</div>
              </div>
            </div>
          </Parallax>
    </body>
    </>
  );
}

export default App;