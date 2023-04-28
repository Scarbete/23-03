import React, { useState } from 'react';
import classes from './App.module.css'
import Modal from './components/Modal/Modal';
import Container from './components/Container/Container';
import Button from './components/Button/Button';
import TodoCard from './components/TodoCard/TodoCard';
import Input from "./components/Input/Input";
import Select from "./components/Select/Select";

function App() {
    const [ isShow, setIsShow ]  = useState(false)
    const [ currentEdit, setCurrentEdit ] = useState(null)
    const [ newTask, setNewTask ] = useState('')
    const [ search, setSearch ] = useState('')
    const [ filter, setFilter ] = useState('all');

    const [ tasks, setTasks ] =  useState([
        {id: 1, title: 'Aesthetic', completed: false},
        {id: 2, title: 'Quasar', completed: false},
        {id: 3, title: 'Anxiety', completed: false},
        {id: 4, title: 'Exweasy', completed: false},
    ])

    const handleShow = () => setIsShow(!isShow)

    const handleAddTask = () => {
        if(newTask.length < 1 ) return

        setTasks((prevState) => [...prevState,
            {
                id: Date.now(),
                title: newTask,
                completed: false
            }
        ])
        setNewTask('')
        handleShow()
    }

    const handleDone = (id) => {
        const newList = tasks.map(task => {
            if (task.id === id) {
                return {...task, completed: !task.completed }
            } else {
                return task
            }
        })
        setTasks([...newList])
    }

    const handleDelete = (id) => {
        const deleted = tasks.filter(e => e.id !== id);
        setTasks([...deleted])
    }

    // useEffect(() => {
    //     console.log('hello')
    // }, [ isShow ])

    const handleEdit = (editTask) => {
        setCurrentEdit(null)

        const editList = tasks.map(task => {

            if (task.id === editTask.id) {
                return editTask
            } else {
                return task
            }
        })
        setTasks([...editList])
    }

    const handleSearch = (event) => setSearch(event.target.value)

    const filteredTasks = tasks.filter(task => {
        if (filter === 'completed') {
            return task.completed
        } else if (filter === 'notCompleted') {
            return !task.completed
        } else {
            return task.title.toLowerCase().includes(search.toLowerCase())
        }
    })

    return (
        <Container>
            <div className={classes.wrapper}>

                { isShow && <Modal handleAddTask={handleAddTask} handleShow={handleShow}>

                    <Input name={'task'}
                           placeholder={'Введите название...'}
                           value={newTask}
                           onChange={(event) => setNewTask(event.target.value)}>
                    </Input>

                    <Button handleClick={handleAddTask}><p>Добавить таск</p></Button>

                </Modal> }

                <Button handleClick={handleShow}><p>Добавить</p></Button>

                <Select handleFilter={(value) => setFilter(value)} />

                <Input value={search}
                       name={'search'}
                       placeholder={'Поиск...'}
                       onChange={handleSearch}>
                </Input>

                {filteredTasks.map(task =>
                    <TodoCard
                        handleDelete={handleDelete}
                        handleDone={handleDone}
                        handleSelectEdit={setCurrentEdit}
                        isEdit={ currentEdit === task.id }
                        handleEdit={handleEdit}
                        key={task.id} task={task}
                    />)}
            </div>
        </Container>
    )
}
export default App