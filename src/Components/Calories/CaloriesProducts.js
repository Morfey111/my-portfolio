import CaloriesDate from './CaloriesDate';
import './CaloriesProducts.css';
import Card from '../UI/Card';
import { useState } from 'react';

const CaloriesProducts = (props) => {

  const [title, setTitle] = useState(props.title)

  const titleHandle = ()=>{
    setTitle('Update state')
  }

  return (
    <Card className='calories-products'>
      <CaloriesDate date={props.date} />
      <div className='calories-products__description'>
        <h2>{title}</h2>
        <div className='calories-products__quantity'>{props.amount} cal</div>
      </div>
      <button onClick={titleHandle}>Change Title</button>
    </Card>
  );
}

export default CaloriesProducts;
