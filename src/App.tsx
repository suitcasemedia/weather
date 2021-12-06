import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPendingSelector,
  getWeatherSelector,
  getErrorSelector,
} from './store/weather/selectors';
import { fetchWeatherRequest } from './store/weather/actions';
import CitySelectInput from './components/CitySelectInput/CitySelectInput';
import SCGDial from './components/SVGDial/SVGDial';
import main from './global.module.scss';
interface SyntheticEvent<T> {
  currentTarget: EventTarget & T;
}
const App = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const weather = useSelector(getWeatherSelector);
  const error = useSelector(getErrorSelector);
  const [city, updateCity] = useState('London');

  useEffect(() => {
    dispatch(fetchWeatherRequest('london'));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    updateCity(e.currentTarget.value);
    dispatch(fetchWeatherRequest(e.currentTarget.value));
  };
return(
  <div className={main.container}>
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
    <article>
      <CitySelectInput handleChange={handleChange} city={city} />
      The current temperature in {weather.location.name} is{' '}
      {weather.current.temp_c} degrees celcius.
      <SCGDial temp_c={weather.current.temp_c} />
    </article>
  )}
  </div>
);
};
export default App;
