import React from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import buttonCls from './Button.module.css'
const AddUser = props=>{
    const addUserHandler = (event) =>{
        event.preventDefault()
    }

    return (
        <Card className={classes.input}>
        <form onSubmit={addUserHandler} >
            <label htmlFor="username">Username</label>
            <input id="username" type="text"></input>
            <label htmlFor="username">Age (Years)</label>
            <input id="username" type="number"></input>
            <button type="submit" className={buttonCls.button}>Add User</button>
        </form>
        </Card>
    )
}

export default AddUser;