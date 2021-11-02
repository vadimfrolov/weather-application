import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AxiosResponse} from 'axios';
import {Weather} from '../types/types';

type CurrentWeather = {
  weather: Weather;
  isLoading: boolean;
  isLoaded: boolean;
  isFailed: boolean;
};

const initialState: CurrentWeather = {
  weather: {
    cod: '',
    message: 0,
    cnt: 0,
    list: null,
    city: {
      id: 0,
      name: '',
      coord: {
        lat: 0,
        lon: 0,
      },
      country: '',
    },
  },
  isLoading: false,
  isLoaded: false,
  isFailed: false,
};

export const currentWeatherSlice = createSlice({
  name: 'current_weather',
  initialState,
  reducers: {
    fetchCurrentWeather(state) {
      state.isLoading = true;
    },
    fetchCurrentWeatherSuccess(state, action: PayloadAction<AxiosResponse<Weather>>) {
      state.isLoading = false;
      state.isLoaded = true;
      state.weather = action.payload.data;
    },
    fetchCurrentWeatherError(state) {
      state.isLoading = false;
      state.isFailed = true;
    },
  },
});

export default currentWeatherSlice.reducer;
