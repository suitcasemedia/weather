import {
  FETCH_WEATHER_REQUEST,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_FAILURE,
} from './actionTypes';

import { WeatherActions, WeatherState } from './types';

const initialState: WeatherState = {
  pending: false,
  weather: {
    location: {
      name: '',
      region: '',
      country: '',
      lat: 0,
      lon: 0,
      tz_id: '',
      localtime_epoch: 0,
      localtime: '',
    },
    current: {
      last_updated_epoch: 0,
      last_updated: '',
      temp_c: 0,
      temp_f: 0,
      is_day: 0,
      condition: {
        text: '',
        icon: '',
        code: 0,
      },
      wind_mph: 0,
      wind_kph: 0,
      wind_degree: 0,
      wind_dir: '',
      pressure_mb: 0,
      pressure_in: 0,
      precip_mm: 0,
      precip_in: 0,
      humidity: 0,
      cloud: 0,
      feelslike_c: 0,
      feelslike_f: 0,
      vis_km: 0,
      vis_miles: 0,
      uv: 0,
      gust_mph: 0,
      gust_kph: 0,
    },
  },
  error: null,
};

export default (state = initialState, action: WeatherActions) => {
  switch (action.type) {
    case FETCH_WEATHER_REQUEST:
      return {
        ...state,
        pending: true,
        weather: initialState.weather
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        pending: false,
        weather: action.payload.weather,
        error: null,
      };
    case FETCH_WEATHER_FAILURE:
      return {
        ...state,
        pending: false,
        weather: initialState.weather,
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
