import classes from './App.css';
import { useState } from 'react';
import Modal from './components/Modal/Modal';
import Container from './components/Container/Container';
import Buttons from "./components/Buttons/Buttons";
import List from "./components/List/List";
import Input from "./components/Input/Input";

export default function App() {

    const [ isShow, setIsShow ]  = useState(false)

    const list = [{id: 1, task: 'Aesthetic'}, {id: 2, task: 'Quasar'}, {id: 3, task: 'Scarbete'}]

    const handleShow = () => setIsShow(!isShow)

    const [ text, setText ] = useState()

    const handleChangeText = (textInput) => {
        console.log(text)
        setText(textInput)
    }

    return (
        <Container>
            <div className={classes.wrapper}>

                { isShow && <Modal handleShow={handleShow}>
                    <Input
                        placeholder={'Добавить список'}
                        name={'task'}
                        onChange={(event) => handleChangeText(event.target.value)}
                    ></Input>
                </Modal>}

                <Buttons handleClick={handleShow}><p>Добавить</p></Buttons>

                <Input
                    placeholder={'Поиск...'}
                    name={'task'}
                    onChange={(event) => handleChangeText(event.target.value)}
                ></Input>

                <List
                    content={list.map((list) => (
                        <div key={list.id}>
                            <h3>ID: {list.id}</h3>
                            <p>TASK: {list.task}</p>
                        </div>
                    ))}>
                </List>

            </div>
        </Container>
    )
}