import React from 'react'
import {Container, Row, Col } from 'react-bootstrap'
import ProfilePicture from '../../images/ProfilePic/profile.png';
import styles from './AboutMe.module.scss';

const AboutMe = () => {
    return (
    <section className={styles.aboutMeContainer}>
         <Row className="h-50 align-items centre">
             <Col>
          <div>
                <div className={styles.aboutMeContainer__box}>
                    <div className={styles.aboutMeContainer__title}>About me</div>
                    <div className={styles.aboutMeContainer__text}>
                        I am a junior web developer from Winchester looking for my next exciting career opportunity.
                        I love to be creative, think outside the box and solve problems which I feel are key traits that complement my passion for front end web design.  

                        When I'm not coding, I am playing music, learning Japanese (
                            本当に楽しいです！) and, when we're not it lockdown, iceskating.
                    </div>
                </div>
            </div>
            </Col>
            <Col className="h-50">
            <div className={styles.boxprofilePicture}>
                <img src = {ProfilePicture} className={styles.profilePicture}/>
            </div>
           </Col>
           </Row>  
    </section>
    )
}

export default AboutMe;
