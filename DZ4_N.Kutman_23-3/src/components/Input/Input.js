import React from 'react';
import classes from './Input.module.css'

function Input({ name, value, placeholder, onChange }) {
    return (
        <>
            <input className={classes.input} name={name} placeholder={placeholder}
                   value={value} onChange={onChange} type="text"
            />
        </>
    )
}

export default Input;