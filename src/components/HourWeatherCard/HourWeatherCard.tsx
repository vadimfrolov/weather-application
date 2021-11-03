import React from 'react';

import KelvinToCelsiusConverter from '../../utils/KelvinToCelsiusConverter/KelvinToCelsiusConverter';

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
      <p className="down">{KelvinToCelsiusConverter(temp)}</p>
    </div>
  );
};

export default HourWeatherCard;
