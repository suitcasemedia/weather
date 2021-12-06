import {
    FETCH_WEATHER_REQUEST,
    FETCH_WEATHER_FAILURE,
    FETCH_WEATHER_SUCCESS,
  } from "./actionTypes";
  import {
    FetchWeatherRequest,
    FetchWeatherSuccess,
    FetchWeatherSuccessPayload,
    FetchWeatherFailure,
    FetchWeatherFailurePayload,
  } from "./types";
  
  export const fetchWeatherRequest = (
    city:string): FetchWeatherRequest => ({
    type: FETCH_WEATHER_REQUEST,
    city
    
  });
  
  export const fetchWeatherSuccess = (
    payload: FetchWeatherSuccessPayload
  ): FetchWeatherSuccess => ({
    type: FETCH_WEATHER_SUCCESS,
    payload,
  });
  
  export const fetchWeatherFailure = (
    payload: FetchWeatherFailurePayload
  ): FetchWeatherFailure => ({
    type: FETCH_WEATHER_FAILURE,
    payload,
  });