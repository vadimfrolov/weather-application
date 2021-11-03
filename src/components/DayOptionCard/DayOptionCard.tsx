import React from 'react';

export default function DayOptionCard(props) {
  const {dayOfTheWeek, clickAction, rawTime} = props;

  const setDate = () => {
    clickAction({rawDate: rawTime, date: dayOfTheWeek});
  };

  return (
    <div className="day-card-option" onClick={() => setDate()}>
      <p>{dayOfTheWeek}</p>
    </div>
  );
}
