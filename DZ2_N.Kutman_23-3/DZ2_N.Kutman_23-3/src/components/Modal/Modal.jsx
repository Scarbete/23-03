import React from 'react';
import classes from './Modal.module.css'
export default function Modal({ handleShow, children}) {

    return (
        <>
            <div onClick={handleShow} className={classes.modalWrapper}></div>
            <div className={classes.modalContent}>
                {children}
            </div>
        </>
    )
}