import './CaloriesDate.css';

const CaloriesDate = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className="calories-date">
      <div className="calories-date__month">{month}</div>
      <div className="calories-date__year">{year}</div>
      <div className="calories-date__day">{day}</div>
    </div>
  );
}

export default CaloriesDate;