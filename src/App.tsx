import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPendingSelector,
  getWeatherSelector,
  getErrorSelector,
} from './store/weather/selectors';
import { fetchWeatherRequest } from './store/weather/actions';
import Widget from './components/Widget/Widget';
import main from './global.module.scss';
const App = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const weather = useSelector(getWeatherSelector);
  const error = useSelector(getErrorSelector);
  const [city, updateCity] = useState('London');

  useEffect(() => {
    dispatch(fetchWeatherRequest('London'));
  }, [dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    updateCity(e.currentTarget.value);
    dispatch(fetchWeatherRequest(e.currentTarget.value));
  };
  return (
    <div className={main.container}>
      <Widget
        error={error}
        pending={pending}
        handleChange={handleChange}
        city={city}
        weather={weather}
      />
    </div>
  );
};
export default App;
