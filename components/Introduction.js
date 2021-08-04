import React, {useEffect} from 'react'
import styles from '../styles/Home.module.css';

const Introduction = ({name, surname, occupation}) => {

    const getOccupation = () => {
        if(occupation === "yoga"){
            return (<span>Yoga Instructor</span>);
        }
        else if(occupation === "social-media"){
            return (<span>Social Media Influencer</span>);
        }


        return (<span>{occupation}</span>);
    }

    return (

        <div className={styles.css_typing}>
            <p>
            Hi, my name is {name} {surname}
            </p>
            <p>
            I am a {getOccupation()}.
            </p>
      </div>
    )
}

export default Introduction
