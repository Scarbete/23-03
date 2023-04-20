import React from 'react';
import classes from './Buttons.module.css'

export default function Buttons ({ children, handleClick }) {
    return (
        <div className={classes.btnBox}>
            <button className={classes.button} onClick={handleClick}>
                {children}
            </button>
        </div>
    )
}