import './NewCalories.css'
import CaloriesForm from './CaloriesForm';

const NewCalories = (props) => {

    //чрез onAddCalories правим liftStstate Up за да предадем данните на 

    const saveCaloriesData = (entredCaloriesData)=>{
        const addNewCalories = {
            ...entredCaloriesData,
            id: Math.random().toString()
        };
            //чрез onAddCalories правим liftStstate Up за да предадем данните на App.js 

        props.onAddCalories(addNewCalories)
    }


    return ( <div className='new-calories'>
       <CaloriesForm onSaveCaloriesData ={saveCaloriesData}/>
    </div> );
}
 
export default NewCalories;