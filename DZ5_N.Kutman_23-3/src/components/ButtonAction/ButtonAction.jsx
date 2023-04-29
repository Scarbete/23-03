import React from 'react';
import styles from './ButtonAction.module.css'

const ButtonAction = ({ handleClick, type, task, children,  }) => {

    return (
        <button className={styles[ type ]} onClick={() => handleClick(task.id)}>
            {children}
        </button>
    )
}

export default ButtonAction;