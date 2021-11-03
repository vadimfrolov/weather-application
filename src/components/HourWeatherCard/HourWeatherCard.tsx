import React from 'react';

const HourWeatherCard = props => {
  const {iconSrc, time, temp, specifyHour, hourId} = props;
  const srcUrl = `http://openweathermap.org/img/wn/${iconSrc}.png`;

  const setHour = () => {
    specifyHour(hourId);
  };

  return (
    <div className="hour-weather-card" onClick={setHour}>
      <p className="top">{time}</p>
      <img className="center" src={srcUrl} alt="weather-icon" />
      <p className="down">{parseInt(temp, 10) - 273}</p>
    </div>
  );
};

export default HourWeatherCard;
