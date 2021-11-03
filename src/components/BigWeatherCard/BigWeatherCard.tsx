import React from 'react';

import KelvinToCelsiusConverter from '../../utils/KelvinToCelsiusConverter/KelvinToCelsiusConverter';

export default function BigWeatherCard(props) {
  const {condition, minTemp, maxTemp, curTemp} = props;

  return (
    <div className="big-weather-card">
      <p className="left-top">{condition}</p>
      <p className="right-top">{`${KelvinToCelsiusConverter(maxTemp)}°/${KelvinToCelsiusConverter(minTemp)}°`}</p>
      <p className="center">{KelvinToCelsiusConverter(curTemp)}</p>
    </div>
  );
}
