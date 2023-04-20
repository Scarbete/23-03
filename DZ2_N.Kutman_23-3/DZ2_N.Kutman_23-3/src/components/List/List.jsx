import React from 'react';
import classes from './List.module.css'

export default function List({ content }) {
    return (
        <div className={classes.listCard}>
            {content}
        </div>
    )
}