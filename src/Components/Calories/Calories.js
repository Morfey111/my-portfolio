import './Calories.css'
import CaloriesProducts from './CaloriesProducts';
import Card from '../UI/Card';

const Calories = (props) => {
    return (<Card className='calories'>
        <CaloriesProducts
            title={props.quantity[0].title}
            amount={props.quantity[0].amount}
            date={props.quantity[0].date}
        />
        <CaloriesProducts
            title={props.quantity[1].title}
            amount={props.quantity[1].amount}
            date={props.quantity[1].date}
        />
        <CaloriesProducts
            title={props.quantity[2].title}
            amount={props.quantity[2].amount}
            date={props.quantity[2].date}
        />
        <CaloriesProducts
            title={props.quantity[3].title}
            amount={props.quantity[3].amount}
            date={props.quantity[3].date}
        />

    </Card>);
}

export default Calories;