import classes from './Input.module.css'

export default function Input({ name, placeholder, onChange }) {

    return (
        <div className={classes.inputBox}>
            <input placeholder={placeholder} name={name} onChange={onChange} type={'text'}/>
        </div>
    )
}