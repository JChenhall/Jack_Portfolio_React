import React from 'react'
import ProfilePicture from '../../../images/ProfilePic/profile.png';
import styles from './ProfilePic.module.scss';
const ProfilePic = () => {
    return (
    <div>
        <div className={styles.boxprofilePicture}>
            <img src = {ProfilePicture} className={styles.profilePicture}/>
        </div>
    </div>
    )
}

export default ProfilePic
