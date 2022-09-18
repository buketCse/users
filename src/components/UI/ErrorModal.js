import React from 'react'
import Card from './Card'
import Button from './Button'
import classes from './ErrorModal.module.css'


const ErrorModal = props => {
    return <> 
    <div className={classes.backdrop} onClick={props.onHandleError}/>
    <Card className={classes.modal}>
        <header className={classes.header}>
        <h2 className={classes.h2}>{props.errTitle}</h2>
        </header>
        <div className={classes.content}>
            <p>{props.errMsg}</p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.onHandleError}>Okay</Button>
        </footer>
    </Card>
    </>
}

export default ErrorModal;