import React from 'react';
import CitySelectInput from '../CitySelectInput/CitySelectInput';
import SCGDial from '../SVGDial/SVGDial';
import { IWeather } from '../../store/weather/types';
import classes from './widget.module.scss'
type TOwnProps = {
  handleChange: Function;
  city: string;
  weather: IWeather;
  pending: boolean;
  error: string | null;
};

type Props = TOwnProps;
const Widget: React.FC<Props> = ({ handleChange, city , weather  , pending, error}) => {
  return (
    <div >
      {pending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        <article className={classes.widget}>
            The current temperature in 
          <CitySelectInput handleChange={handleChange} city={city} />
         is{' '}
          {weather.current.temp_c} degrees celcius
          <SCGDial temp_c={weather.current.temp_c} />
        </article>
      )}
    </div>
  );
};

export default Widget;