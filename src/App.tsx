import React from 'react';
import {useDispatch} from 'react-redux';
import './styles.scss';
import {fetchCurrentWeather} from '../src/store/thunks/fetchCurrentWeather';

export function App() {
  const dispatch = useDispatch();

  const fetchData = () => {
    dispatch(fetchCurrentWeather('München,DE'));
  };

  return (
    <div>
      <div className="wrapper">
        <h1>Hello world</h1>
        <button onClick={fetchData}>Try</button>
      </div>
    </div>
  );
}

export default App;
