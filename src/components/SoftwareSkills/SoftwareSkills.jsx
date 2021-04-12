import React, { useState } from 'react'
import styles from './SoftwareSkills.module.scss';


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


const softwareSkills = () => {
    return (
    <section className={styles.section__backdrop}>
        <div className={styles.box}>
            <div className={styles.box__img}>
                <img src={angular}/>
            </div>
            <div className={styles.box__skills}>
            <span className={styles.box__skills__title }>Angular</span>
            <div className={styles.box__skills__level}>
                <div className={styles.box__skills__level__progress} style={{width: "40%"}}></div>
            </div>
            <span className={styles.box__skills__Value}>40%</span>
        </div>
        </div>

        <div className={styles.box}>
            <div className={styles.box__img}>
                <img src={bootstrap}/>
            </div>
            <div className={styles.box__skills}>
            <span className={styles.box__skills__title }>Bootstrap</span>
            <div className={styles.box__skills__level}>
                <div className={styles.box__skills__level__progress} style={{width: "60%"}}></div>
            </div>
            <span className={styles.box__skills__Value}>60%</span>
        </div>
        </div>

        <div className={styles.box}>
            <div className={styles.box__img}>
                <img src={css}/>
            </div>
            <div className={styles.box__skills}>
            <span className={styles.box__skills__title }>CSS</span>
            <div className={styles.box__skills__level}>
                <div className={styles.box__skills__level__progress} style={{width: "90%"}}></div>
            </div>
            <span className={styles.box__skills__Value}>90%</span>
        </div>
        </div>

        <div className={styles.box}>
            <div className={styles.box__img}>
                <img src={cypress}/>
            </div>
            <div className={styles.box__skills}>
            <span className={styles.box__skills__title }>Cypress</span>
            <div className={styles.box__skills__level}>
                <div className={styles.box__skills__level__progress} style={{width: "50%"}}></div>
            </div>
            <span className={styles.box__skills__Value}>50%</span>
        </div>
        </div>

        <div className={styles.box}>
            <div className={styles.box__img}>
                <img src={figma}/>
            </div>
            <div className={styles.box__skills}>
            <span className={styles.box__skills__title }>Figma</span>
            <div className={styles.box__skills__level}>
                <div className={styles.box__skills__level__progress} style={{width: "85%"}}></div>
            </div>
            <span className={styles.box__skills__Value}>85%</span>
        </div>
        </div>

        <div className={styles.box}>
            <div className={styles.box__img}>
                <img src={firebase}/>
            </div>
            <div className={styles.box__skills}>
            <span className={styles.box__skills__title }>Firebase</span>
            <div className={styles.box__skills__level}>
                <div className={styles.box__skills__level__progress} style={{width: "60%"}}></div>
            </div>
            <span className={styles.box__skills__Value}>60%</span>
        </div>
        </div>

        <div className={styles.box}>
            <div className={styles.box__img}>
                <img src={github}/>
            </div>
            <div className={styles.box__skills}>
            <span className={styles.box__skills__title }>GitHub</span>
            <div className={styles.box__skills__level}>
                <div className={styles.box__skills__level__progress} style={{width: "80%"}}></div>
            </div>
            <span className={styles.box__skills__Value}>80%</span>
        </div>
        </div>

        <div className={styles.box}>
            <div className={styles.box__img}>
                <img src={html5}/>
            </div>
            <div className={styles.box__skills}>
            <span className={styles.box__skills__title }>HTML</span>
            <div className={styles.box__skills__level}>
                <div className={styles.box__skills__level__progress} style={{width: "90%"}}></div>
            </div>
            <span className={styles.box__skills__Value}>90%</span>
        </div>
        </div>

        <div className={styles.box}>
            <div className={styles.box__img}>
                <img src={jest}/>
            </div>
            <div className={styles.box__skills}>
            <span className={styles.box__skills__title }>Jest</span>
            <div className={styles.box__skills__level}>
                <div className={styles.box__skills__level__progress} style={{width: "60%"}}></div>
            </div>
            <span className={styles.box__skills__Value}>60%</span>
        </div>
        </div>

        <div className={styles.box}>
            <div className={styles.box__img}>
                <img src={jscript}/>
            </div>
            <div className={styles.box__skills}>
            <span className={styles.box__skills__title }>Java Script</span>
            <div className={styles.box__skills__level}>
                <div className={styles.box__skills__level__progress} style={{width: "80%"}}></div>
            </div>
            <span className={styles.box__skills__Value}>80%</span>
        </div>
        </div>

        <div className={styles.box}>
            <div className={styles.box__img}>
                <img src={micro}/>
            </div>
            <div className={styles.box__skills}>
            <span className={styles.box__skills__title }>Microsoft Office</span>
            <div className={styles.box__skills__level}>
                <div className={styles.box__skills__level__progress} style={{width: "90%"}}></div>
            </div>
            <span className={styles.box__skills__Value}>90%</span>
        </div>
        </div>

        <div className={styles.box}>
            <div className={styles.box__img}>
                <img src={mongo}/>
            </div>
            <div className={styles.box__skills}>
            <span className={styles.box__skills__title }>Mongo</span>
            <div className={styles.box__skills__level}>
                <div className={styles.box__skills__level__progress} style={{width: "30%"}}></div>
            </div>
            <span className={styles.box__skills__Value}>30%</span>
        </div>
        </div>

        <div className={styles.box}>
            <div className={styles.box__img}>
                <img src={nodejs}/>
            </div>
            <div className={styles.box__skills}>
            <span className={styles.box__skills__title }>NodeJs</span>
            <div className={styles.box__skills__level}>
                <div className={styles.box__skills__level__progress} style={{width: "70%"}}></div>
            </div>
            <span className={styles.box__skills__Value}>70%</span>
        </div>
        </div>

        <div className={styles.box}>
            <div className={styles.box__img}>
                <img src={react}/>
            </div>
            <div className={styles.box__skills}>
            <span className={styles.box__skills__title }>React</span>
            <div className={styles.box__skills__level}>
                <div className={styles.box__skills__level__progress} style={{width: "80%"}}></div>
            </div>
            <span className={styles.box__skills__Value}>80%</span>
        </div>
        </div>

        <div className={styles.box}>
            <div className={styles.box__img}>
                <img src={sass}/>
            </div>
            <div className={styles.box__skills}>
            <span className={styles.box__skills__title }>SASS/SCSS</span>
            <div className={styles.box__skills__level}>
                <div className={styles.box__skills__level__progress} style={{width: "90%"}}></div>
            </div>
            <span className={styles.box__skills__Value}>90%</span>
        </div>
        </div>

        <div className={styles.box}>
            <div className={styles.box__img}>
                <img src={typescript}/>
            </div>
            <div className={styles.box__skills}>
            <span className={styles.box__skills__title }>Typescript</span>
            <div className={styles.box__skills__level}>
                <div className={styles.box__skills__level__progress} style={{width: "60%"}}></div>
            </div>
            <span className={styles.box__skills__Value}>60%</span>
        </div>
        </div>
    </section>
    )
}

export default softwareSkills
