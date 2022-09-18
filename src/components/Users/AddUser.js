import React, {useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import buttonCls from './../UI/Button.module.css';
import Button from './../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props=>{
    const [enteredUsername, setEnteredUsername]=useState('')
    const [enteredAge, setEnteredAge]=useState('')
    const [error, setError]=useState()

    const addUserHandler = (event) =>{
        event.preventDefault()
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length===0){
            setError({errTitle:'Wrong Username', errMsg:'Please enter a valid username'})
            return;
        }
        if(Number(enteredAge)<1){
            setError({errTitle:'Wrong Age', errMsg:'Please enter a valid age'})
            return;
        }
        setError(null)
        props.onAddUser(enteredUsername,enteredAge)
        setEnteredUsername('')
        setEnteredAge('')
    }

    const usernameChangeHandler=(event)=> {
        setEnteredUsername(event.target.value)
    }

    const ageChangeHandler=(event)=> {
        setEnteredAge(event.target.value)
    }

    const errorHandler = () =>{
        setError(null)
    }

    return (
        <>
        ({error && <ErrorModal onHandleError={errorHandler} errTitle={error.errTitle} errMsg={error.errMsg}/>})
        <Card className={classes.input}>
        <form onSubmit={addUserHandler} >
            <label htmlFor="username">Username</label>
            <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}></input>
            <label htmlFor="username">Age (Years)</label>
            <input id="username" type="number" value={enteredAge} onChange={ageChangeHandler}></input>
            <Button type="submit" className={buttonCls.button}>Add User</Button>
        </form>
        </Card>
        </>
    )
}

export default AddUser;