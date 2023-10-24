import { useState } from 'react';
import classes from './MealForm.module.css';
import Input from '../../UI/Input';

const MealForm = (props) => {

    const [enteredValue, setEnteredValue] =  useState();
    // console.log(enteredValue);
    const amountChangeHandler = (event) => {
        // console.log(event);
        setEnteredValue(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        return;
    }
    return (
        <form className={classes.form}>
            <Input label="Amount" value={enteredValue} onChange={amountChangeHandler} input={{
                id: 'amount_' + props.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }}/>
            <button type='submit'>+ Add</button>
        </form>
    )
}

export default MealForm;