import React from 'react'
import classes from './Select.module.css'

const Select = ({ handleFilter }) => {
    return (
        <select className={classes.select} onChange={(event) => handleFilter(event.target.value)}>
            <option value="all">Все таски</option>
            <option value="completed">Выполненные</option>
            <option value="notCompleted">Не выполненные</option>
        </select>
    )
}
export default Select