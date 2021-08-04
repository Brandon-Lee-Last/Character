import React from 'react'
import Head from './Head';
import Torso from './Torso';
import Introduction from './Introduction';
import Legs from './Legs';
import styles from '../styles/Home.module.css';

const Body = ({formData: {name, surname, gender, birth_date, occupation, colour}}) => {
    return (
        <div>
            <div className={styles.users__character}>
            <Introduction name={name} surname={surname} occupation={occupation}/>
            <br/>
            <div className={styles.char__head}>
            <Head age={birth_date} gender={gender}/>
            </div>
            <Torso occupation={occupation}/>
            </div>
            <Legs colour={colour}/>
        </div>
    )
}

export default Body
