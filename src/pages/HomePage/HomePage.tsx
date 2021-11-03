import React, {useState, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import DayOptionCard from '../../components/DayOptionCard/DayOptionCard';
import BigWeatherIcon from '../../components/BigWeatherIcon/BigWeatherIcon';
import BigCityDateCard from '../../components/BigCityDateCard/BigCityDateCard';
import BigWeatherCard from '../../components/BigWeatherCard/BigWeatherCard';
import HourWeatherCard from '../../components/HourWeatherCard/HourWeatherCard';
import ButtonFetchData from '../../components/ButtonFetchData/ButtonFetchData';

import LocalDateFromat from '../../utils/LocaleDateFormat/LocalDateFormat';

import {fetchCurrentWeather} from '../../store/thunks/fetchCurrentWeather';
import {RootState} from '../../store/store';
import {WeatherListItem, CurrentDateInterface} from '../../store/types/types';

const Homepage = () => {
  const dispatch = useDispatch();

  const fetchData = () => {
    dispatch(fetchCurrentWeather('München,DE'));
  };

  const weatherData = useSelector((state: RootState) => state.currentWeatherSliceReduser.weather);

  const [currentDate, setCurrentDate] = useState<CurrentDateInterface>({
    rawDate: '',
    date: '',
  });

  const [currentHour, setcurrentHour] = useState('');

  const fetchDays = useMemo(
    () =>
      weatherData.list
        ? weatherData.list.filter(day => {
            return day.dt_txt.endsWith('15:00:00');
          })
        : [],
    [weatherData.list]
  );

  const memoizedTemperature = useMemo(
    () =>
      weatherData.list && currentDate.rawDate
        ? weatherData.list.filter(dateF => {
            return dateF.dt_txt.startsWith(currentDate.rawDate.slice(0, 10));
          })
        : [],
    [weatherData.list, currentDate.rawDate]
  );

  const memoizedHourData = useMemo(
    () =>
      memoizedTemperature
        ? memoizedTemperature.find(i => i.dt_txt === currentHour)
        : {weather: [], main: {temp: 0, temp_max: 0, temp_min: 0}},
    [memoizedTemperature, currentHour]
  );

  return (
    <>
      {weatherData.list === null && <ButtonFetchData fetchWeatherData={fetchData} />}
      <div className="wrapper top-line">
        {fetchDays &&
          fetchDays.map((item: WeatherListItem) => (
            <DayOptionCard
              key={item.dt}
              rawTime={item.dt_txt}
              clickAction={setCurrentDate}
              dayOfTheWeek={LocalDateFromat(item.dt_txt)}
            />
          ))}
      </div>
      <div className="wrapper center-line">
        {memoizedHourData && <BigWeatherIcon iconSrc={memoizedHourData.weather[0].icon} />}
        {memoizedHourData && (
          <BigWeatherCard
            condition={memoizedHourData.weather[0].main}
            minTemp={memoizedHourData.main.temp_min}
            maxTemp={memoizedHourData.main.temp_max}
            curTemp={memoizedHourData.main.temp}
          />
        )}
        <BigCityDateCard city={weatherData.city.name} day={currentDate.date} />
      </div>
      <div className="wrapper down-line">
        {memoizedTemperature.map((temp: WeatherListItem) => (
          <HourWeatherCard
            key={temp.dt}
            hourId={temp.dt_txt}
            specifyHour={setcurrentHour}
            iconSrc={temp.weather[0].icon}
            time={`${new Date(temp.dt_txt).getHours()}:${new Date(temp.dt_txt).getMinutes()}0`}
            temp={temp.main.temp}
          />
        ))}
      </div>
    </>
  );
};

export default React.memo(Homepage);
