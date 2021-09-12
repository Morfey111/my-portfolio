import { useEffect, useState } from 'react/cjs/react.development';
import './CaloriesForm.css'

const CaloriesForm = (props) => {

    const [titleChange, setTitleChange] = useState('')
    const [amountChange, setAmountChange] = useState('')
    const [dateChange, setDateChange] = useState('')

    const addNewCalories = {
        title: titleChange,
        amount: amountChange,
        date: dateChange
    }

    const titleChangeHandler = (event) => {
        setTitleChange(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setAmountChange(event.target.value)
    }

    const dateChangeHandler = event => {
        setDateChange(event.target.value)
    }

    const handlerSubmit = (event) => {
        event.preventDefault()

        props.onSaveCaloriesData(addNewCalories)

        setTitleChange('')
        setAmountChange('')
        setDateChange('')
    }



    return (<div className='new-caloriee__controls'>
        <form onSubmit={handlerSubmit}>
            <div className='new-calories__control'>
                <label>Title </label>
                <input type='text' value={titleChange} onChange={titleChangeHandler} />
            </div>

            <div className='new-calories__control'>
                <label>Amount </label>
                <input type='number' min='0.01' step='0.01' value={amountChange} onChange={amountChangeHandler} />
            </div>

            <div className='new-calories__control'>
                <label>Date </label>
                <input type='date' min='2019-01-01' max='2022-12-31' value={dateChange} onChange={dateChangeHandler} />
            </div>
            <div className='new-calories__actions'>

                <button type='submit'>Add calories </button>
            </div>
        </form>

    </div>);
}

export default CaloriesForm;