import { useState } from 'react/cjs/react.development';
import './CaloriesForm.css'

const CaloriesForm = () => {

    const [titleChange, setTitleChange] = useState('')
    const [amountChange, setAmountChange] = useState('')
    const [dateChange, setDateHandler] = useState('')

    const titleChangeHandler = (event) => {
        setTitleChange(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setAmountChange(event.target.value)
    }

    const dateChangeHandler = event => {
        setDateHandler(event.target.value)
    }

    return (<div className='new-caloriee__controls'>
        <form>
            <div className='new-calories__control'>
                <label>Title </label>
                <input type='text' onChange={titleChangeHandler} />
            </div>

            <div className='new-calories__control'>
                <label>Amount </label>
                <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} />
            </div>

            <div className='new-calories__control'>
                <label>Date </label>
                <input type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} />
            </div>
            <div className='new-calories__actions'>

                <button type='submit'>Add calories </button>
            </div>
            <h2>{titleChange}</h2>
        </form>

    </div>);
}

export default CaloriesForm;