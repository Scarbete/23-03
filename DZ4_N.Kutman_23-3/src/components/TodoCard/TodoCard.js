import React, { useState } from "react";
import classes from './TodoCard.module.css';
import ButtonAction from "../ButtonAction/ButtonAction";

const TodoCard = ({ task, handleDone, handleDelete, handleSelectEdit, isEdit, handleEdit }) => {
    const [ newTitle, setNewTitle ] = useState(task.title)

    const handleNewTitle = (title) => {
        console.log(title, 'title')
        setNewTitle(title)
    }

    const handleCancelEdit = () => {
        setNewTitle(task.title)
        handleSelectEdit(null)
    }

    if (isEdit) {
        return <div className={classes.todoCard}>
            <input onChange={(event) => handleNewTitle(event.target.value)}
                   value={newTitle} placeholder={'edit'} type="text" className={classes.editSave}/>
            <div className={classes.editBtns}>
                <button className={classes.cancel} onClick={handleCancelEdit}>Cancel</button>
                <button className={classes.saveBtn} onClick={() => handleEdit({...task, title: newTitle})}>Save</button>
            </div>
        </div>
    } else {
        return <div className={ task.completed ? `${classes.todoCard} ${classes.done}`: classes.todoCard }>
            <div className={classes.todoTitle}>
                <h3>{task.title}</h3>
            </div>
            <div className={classes.todoButtons}>
                <ButtonAction task={task} handleClick={handleSelectEdit} type={'edit'} >Edit</ButtonAction>
                <ButtonAction task={task} handleClick={handleDone} type={'done'} >Done</ButtonAction>
                <ButtonAction task={task} handleClick={handleDelete} type={'delete'} >Delete</ButtonAction>
            </div>
        </div>
    }
}
export default TodoCard