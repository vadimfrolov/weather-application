import React from 'react';

export default function BigCityDateCard(props) {
  const {city, day} = props;

  return (
    <div className="big-city-date-card">
      <p>
        <p>{city}</p>
        {day}
      </p>
    </div>
  );
}
