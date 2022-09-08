import React, {useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import buttonCls from './../UI/Button.module.css';
import Button from './../UI/Button';

const AddUser = props=>{
    const [enteredUsername, setEnteredUsername]=useState('')
    const [enteredAge, setEnteredAge]=useState('')

    const addUserHandler = (event) =>{
        event.preventDefault()
        setEnteredUsername('')
        setEnteredAge('')
    }

    const usernameChangeHandler=(event)=> {
        setEnteredUsername(event.target.value)
    }

    const ageChangeHandler=(event)=> {
        setEnteredAge(event.target.value)
    }

    return (
        <Card className={classes.input}>
        <form onSubmit={addUserHandler} >
            <label htmlFor="username">Username</label>
            <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}></input>
            <label htmlFor="username">Age (Years)</label>
            <input id="username" type="number" value={enteredAge} onChange={ageChangeHandler}></input>
            <Button type="submit" className={buttonCls.button}>Add User</Button>
        </form>
        </Card>
    )
}

export default AddUser;