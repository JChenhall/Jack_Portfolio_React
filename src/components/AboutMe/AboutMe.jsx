import React from 'react'
import {Container, Row, Col } from 'react-bootstrap'
import ProfilePic from './ProfilePic/ProfilePic.jsx';
import styles from './AboutMe.module.scss';

const AboutMe = () => {
    return (
    <section className={styles.aboutMeContainer}>
         <Row>
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
            <Col>
            <Container>
           <ProfilePic/>
           </Container>
           </Col>
           </Row>
    </section>
    )
}

export default AboutMe;
