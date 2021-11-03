import React from 'react';

export default function BigWeatherIcon(props) {
  const {iconSrc} = props;
  const srcUrl = `http://openweathermap.org/img/wn/${iconSrc}@2x.png`;

  return (
    <div className="big-weather-icon">
      <img className="center" src={srcUrl} alt="weather-icon" />
    </div>
  );
}
