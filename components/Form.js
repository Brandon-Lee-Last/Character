import React from 'react'
import styles from '../styles/Home.module.css';

const Form = ({method="POST", action=null, inputs=null, onSubmit = () => {}}) => {

    let count=0;
    return (
        <div className={styles.container}>
        <form method={method} action={action} onSubmit={onSubmit} className={styles.form__container}>
            {!inputs ? "Inputs are required" : (inputs.map(input => input))}
            <input type="submit"/>
        </form>
        </div>
    )
}

export default Form
