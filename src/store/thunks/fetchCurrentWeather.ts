import {currentWeatherSlice} from './../slices/currentWeatherSlice';
import {WeatherServices} from '../../services/WeatherServices';
import {AppDispatch} from '../store';

export const fetchCurrentWeather = (payload: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(currentWeatherSlice.actions.fetchCurrentWeather());

    const res = await WeatherServices.getCurrentWeather(payload);

    if (res.data) {
      dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(res));
    } else {
      dispatch(currentWeatherSlice.actions.fetchCurrentWeatherError());
    }
  } catch (error) {
    console.log(error);
  }
};
