import { createSelector } from "reselect";

import { AppState } from "../rootReducer";

const getPending = (state: AppState) => state.weather.pending;

const getWeather = (state: AppState) => state.weather.weather;

const getError = (state: AppState) => state.weather.error;

export const getWeatherSelector = createSelector(getWeather, (weather) => weather);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);