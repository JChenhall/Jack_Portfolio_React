import React from 'react'
import styles from './HeroScreen.module.scss';
import profilePic from '../../images/ProfilePic/profile.png';

const heroScreen = () => {
    return (
        
    <section className={styles.hero}>

        <div className={styles.hero__landing}>
            <div className={styles.hero__landing__title}>
                <div className={styles.hero__landing__title__display-1}>HI, I'M <span className={styles.jack__colour}>JACK</span></div>
                <div className={styles.hero__landing__title__display-1}>A WEB DESIGNER</div>
            </div>
            <div className={styles.hero__landing__subtitle}>
                <div className={styles.hero__landing__subtitle__display-5}>LET'S SEE IF I'M WHAT YOU'RE LOOKING FOR </div>
            </div>
        </div>
        
        <img src={profilePic} alt="Profile" className={styles.profilePic}/>
      
    </section>
    
    )
}

export default heroScreen
