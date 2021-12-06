import axios, { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { fetchWeatherFailure, fetchWeatherSuccess } from "./actions";
import { FETCH_WEATHER_REQUEST } from "./actionTypes";
import { FetchWeatherRequest, IWeather } from "./types";

const getWeathers = (city:string)=>
  axios.get<IWeather[]>(`http://api.weatherapi.com/v1/current.json?key=cbd85258726241f0bde05059210612&q=${city}&aqi=no`);

/*
  Worker Saga: Fired on FETCH_Weather_REQUEST action
*/
function* fetchWeatherSaga(action:FetchWeatherRequest) {
 const {city} = action;
 
  try {
    const response: AxiosResponse<IWeather> = yield call(getWeathers, city);
    yield put(
      fetchWeatherSuccess({
        weather: response.data,
      })
    );
  } catch (e) {
    yield put(
      fetchWeatherFailure({
        error: e.message,
      })
    );
  }
  };
/*
  Starts worker saga on latest dispatched `FETCH_WEATHER_REQUEST` action.
  Allows concurrent increments.
*/
function* WeatherSaga() {
  yield all([takeLatest(FETCH_WEATHER_REQUEST, fetchWeatherSaga)]);
}

export default WeatherSaga