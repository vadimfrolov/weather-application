import React from 'react';

export default function BigWeatherCard(props) {
  const {condition, minTemp, maxTemp, curTemp} = props;

  return (
    <div className="big-weather-card">
      <p className="left-top">{condition}</p>
      <p className="right-top">{`${parseInt(maxTemp, 10) - 273}°/${parseInt(minTemp, 10) - 273}°`}</p>
      <p className="center">{parseInt(curTemp, 10) - 273}</p>
    </div>
  );
}
