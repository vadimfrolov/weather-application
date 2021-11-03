import React from 'react';

export default function ButtonFetchData(props) {
  const {fetchWeatherData} = props;

  const setDate = () => {
    fetchWeatherData();
  };

  return (
    <button className="fetch-data-button" onClick={() => setDate()}>
      fetch data
    </button>
  );
}
