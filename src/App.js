import Calories from "./Components/Calories/Calories";
import NewCalories from './Components/NewCalories/NewCalories'
const App = () => {
  const calories = [
    {
      id: 'e1',
      title: 'Ice Cream',
      amount: 500,
      date: new Date(2021, 7, 28),
    },
    {
      id: 'e2', title: 'Bananas',
      amount: 250,
      date: new Date(2021, 7, 28)
    },
    {
      id: 'e3',
      title: 'Fish with potatoes',
      amount: 400,
      date: new Date(2021, 7, 28),
    },
    {
      id: 'e4',
      title: 'Salad',
      amount: 100,
      date: new Date(2021, 7, 28),
    },
  ];

  return (
    <div>
      <NewCalories />

      <Calories quantity={calories} />
    </div>
  );
}

export default App;