import {configureStore, combineReducers} from '@reduxjs/toolkit';
import currentWeatherSliceReduser from './slices/currentWeatherSlice';

const rootReducer = combineReducers({
  currentWeatherSliceReduser,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
