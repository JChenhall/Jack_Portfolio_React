import { Carousel, CarouselItem, Container, Row, Col } from 'react-bootstrap'
import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom';
import styles from './Projects.module.scss';
import calculator from '../../images/ProjectIcon/calcWideSame.png';
import game from '../../images/ProjectIcon/gameWideSame.png';
import morseCode from '../../images/ProjectIcon/morseWideSame.png';
import beerApi from '../../images/ProjectIcon/brewdog.PNG';

import angular from '../../images/Icons/angular-brands.png';
import bootstrap from '../../images/Icons/bootstrap.png';
import css from '../../images/Icons/css3-alt-brands.png';
import cypress from '../../images/Icons/cypress.png';
import figma from '../../images/Icons/figma.png';
import firebase from '../../images/Icons/firebase.png';
import github from '../../images/Icons/github.png';
import html5 from '../../images/Icons/html5.png';
import jest from '../../images/Icons/jest.png';
import jscript from '../../images/Icons/jscript.png';
import micro from '../../images/Icons/micro.png';
import mongo from '../../images/Icons/mongo.png';
import nodejs from '../../images/Icons/nodejs.png';
import react from '../../images/Icons/react-brands.png';
import sass from '../../images/Icons/sass.png';
import typescript from '../../images/Icons/typescript.png';

const useHover = () => {
    const ref = useRef()
    const [hovered, setHovered] = useState(false);
    

    const enter = () => setHovered(true);
    const leave = () => setHovered(false);

    useEffect(() => {
            ref.current.addEventListener('mouseenter', enter)
            ref.current.addEventListener('mouseleave', leave)
        return () => {
            ref.current.removeEventListener('mouseenter', enter)
            ref.current.removeEventListener('mouseleave', leave)
        }
    }, [ref])

    return [ref, hovered]
}

const Projects = () => {

const [ref, hovered] = useHover()
    return (
        <section className={styles.projectBox}>
            <div className={styles.projectTitle}> Here are my projects</div>
            <div className={styles.projectSubTitle}>Hover over them to see the description and the skills used</div>
            <Row>
            <div ref={ref} className={styles.skillBox}>
            <Carousel pause={'hover'} fade={true}>

                <Carousel.Item interval={2000} >
                    <img
                    className={styles.carol}
                    src={calculator}
                    alt="First slide"
                    />
                         <Carousel.Caption>
                            <h3>Calculator</h3>
                            <input type button onClick={()=> window.open('https://jchenhall.github.io/Jack-s-Calculator/', "_blank")} value='Click here to see more' class="btn btn-lg btn-primary" ></input>
                        </Carousel.Caption> 
                        {hovered && 
                        <div className={styles.blurb}>
                            <Row>
                                <Col>
                                    <h1 className={styles.projectName}>My Simple Calculator</h1>
                                    <h2 className={styles.readMe}>
                                        This project was a method to teach me how to use HTML, CSS and Java Script to make a simple calculator. I tried my hand at object orientated programing for my javascript style as it seemed like a good fit and I wanted to push myself with what I had learned so far.
                                        The calculator runs simple mathmatical functions, allows the user to delete numbers or wipe the sceen. It also stores the users previous line of the calculation.
                                        I also wanted to practice my CSS skills so included a "Nightmode" button (the moon). This helped me learn about adding/removing classes, as well as editing styles within a SASS framework.
                                        As part of the course I learnt how to install and use cypress tests which checked the interaction a user might have with the app. I used this tool to make sure my project worked as intended. 
                                        I also added a JS library which gave the calculator 3D propeties. It isnt the most practical library, but it looks cool!! (in my opinion)
                                        I hope you like it! here is the GitHub link if you are interested, or click the button bellow to go and see it for yourself!
                                    </h2>
                                </Col>
                                <Col>
                                    <h1 className={styles.projectName}>Skills Used</h1>
                                        <ul className={styles.skillUsed}>
                                            <li> <img src={html5}/> HTML5</li>
                                            <li> <img src={css}/> CSS</li>
                                            <li> <img src={sass}/> SASS / SCSS</li>
                                            <li> <img src={jscript}/> JAVA SCRIPT</li>
                                            <li> <img src={cypress}/> CYPRESS</li>
                                        </ul>
                                </Col>
                            </Row>
                                
                        </div>}
                </Carousel.Item>

                <Carousel.Item interval={2000}>
                    <img
                    className={styles.carol} 
                    src={game}
                    alt="Second slide"
                    />

                        <Carousel.Caption className={styles.Container__Slides__caption}>
                            <h3>Simple Side Scrolling Game</h3>                         
                            <input type button onClick={()=> window.open("https://jchenhall.github.io/SideScrollingGame/", "_blank")} value='Click here to see more' class="btn btn-lg btn-primary"></input>
                        </Carousel.Caption>
                        {hovered && 
                        <div className={styles.blurb}>
                           <Row>
                                <Col>
                                    <h1 className={styles.projectName}>My Side Scrolling Game</h1>
                                    <h2 className={styles.readMe}>
                                        I really enjoyed this project! By this point in the course I had found a real passion for CSS annimation and had been playing around with keyframes. I used this project as an excuse to put all of this together.
                                        The main character and the skeleton are both still img strips taken from this free use website (_________________). I used keyframes to cycle the images in a specific direction like a flipbook giving the impression of movement.
                                        the jump animation and the main menu idles are the same. The jump was achieved with a simple JS element reposition and a detection if statement to fail the user if the character and skeleton connected.
                                        I had a lot of fun making this small game and have plans to come back and add a winner screen and levels.
                                    </h2>
                                </Col>
                                <Col>
                                    <h1 className={styles.projectName}>Skills Used</h1>
                                        <ul className={styles.skillUsed}>
                                            <li> <img src={html5}/> HTML5</li>
                                            <li> <img src={css}/> CSS</li>
                                            <li> <img src={sass}/> SASS / SCSS</li>
                                            <li> <img src={jscript}/> JAVA SCRIPT</li>
                                        </ul>
                                </Col>
                            </Row>
                                
                           
                        </div>}
                </Carousel.Item>

                <Carousel.Item interval={2000} >
                    <img
                    className={styles.carol} 
                    src={morseCode}
                    alt="Third slide"
                    />
                        <Carousel.Caption>
                            <h3>Morse Code Translator</h3>
                            <input type button onClick={()=> window.open("https://jchenhall.github.io/MorseCodeTranslator/", "_blank")} value='Click here to see more' class="btn btn-lg btn-primary"></input>
                        </Carousel.Caption>
                        {hovered && 
                        <div className={styles.blurb}>
                         <Row>
                                <Col>
                                    <h1 className={styles.projectName}>My Translator</h1>
                                    <h2 className={styles.readMe}>
                                        This project was designed to introduce me to test orientated programming. I started by writing tests in a test.js file using the JEST method. My task was to develop a translator that could take the English language and translate it into Morse Code. 
                                        My javascript was written in such a way that it passed the tests which allowed me to see that my code worked as I coded.
                                        It was a very good feeling when all the tests went green!! Mission acomplished!! 
                                    </h2>
                                </Col>
                                <Col>
                                    <h1 className={styles.projectName}>Skills Used</h1>
                                        <ul className={styles.skillUsed}>
                                            <li> <img src={html5}/> HTML5</li>
                                            <li> <img src={css}/> CSS</li>
                                            <li> <img src={sass}/> SASS / SCSS</li>
                                            <li> <img src={jscript}/> JAVA SCRIPT</li>
                                            <li> <img src={jest}/> JEST</li>
                                            <li> <img src={cypress}/> CYPRESS</li>
                                        </ul>
                                </Col>
                            </Row>
                        </div>}
                </Carousel.Item>

                <Carousel.Item interval={2000} >
                    <img
                    className={styles.carol}  
                    src={beerApi}
                    alt="Fourth slide"
                    />

                        <Carousel.Caption>
                            <h3>BrewDog API</h3>
                            <input type button onClick={()=> window.open("https://jchenhall.github.io/BrewDogAPI/", "_blank")} value='Click here to see more' class="btn btn-lg btn-primary"></input>
                        </Carousel.Caption>
                        {hovered && 
                        <div className={styles.blurb}>
                           <Row>
                                <Col>
                                    <h1 className={styles.projectName}>BrewDog API</h1>
                                    <h2 className={styles.readMe}>
                                        This project revolved around the BrewDog API ("____________"). The task was to get the information and display select items on the page. The user can search for BrewDog beers and check certain options using the checkboxes. 
                                        This updates the display in real time which shows my understanding of API's and passing props in REACTJS.
                                    </h2>
                                </Col>
                                <Col>
                                    <h1 className={styles.projectName}>Skills Used</h1>
                                        <ul className={styles.skillUsed}>
                                            <li> <img src={html5}/> HTML5</li>
                                            <li> <img src={css}/> CSS</li>
                                            <li> <img src={sass}/> SASS / SCSS</li>
                                            <li> <img src={jscript}/> JAVA SCRIPT</li>
                                            <li> <img src={react}/> REACT</li>
                                            <li> <img src={firebase}/> FIREBASE</li>
                                            <li> <img src={nodejs}/> NODEJS</li>
                                        </ul>
                                </Col>
                            </Row>
                           
                        </div>}
                </Carousel.Item>
            </Carousel>
            </div>
            </Row>
        </section>
    )
        
}

export default Projects
