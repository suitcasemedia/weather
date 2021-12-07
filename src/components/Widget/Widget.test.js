import React from 'react';
import { render } from '@testing-library/react';
import Widget from './Widget';
import weather from '../../mockData/mockData';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const {
  error,
  pending,
  handleChange,
  location: { city },
} = weather;

describe('With React Testing Library', () => {
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  it('Shows "The current temperature in"', () => {
    store = mockStore(initialState);
    const { getByText } = render(
      <Provider store={store}>
        <Widget
          error={error}
          pending={pending}
          handleChange={handleChange}
          city={city}
          weather={weather}
        />
      </Provider>
    );
    const temperatureText = getByText(/The current temperature in/);
    expect(temperatureText).toBeInTheDocument();
  });

  it('Shows the loading message when waiting for weather data', () => {
    store = mockStore(initialState);
    const { getByText } = render(
      <Provider store={store}>
        <Widget
          error={error}
          pending={true}
          handleChange={handleChange}
          city={city}
          weather={weather}
        />
      </Provider>
    );
    const loadingText = getByText(/Loading.../);
    expect(loadingText).toBeInTheDocument();
  });
  it('Shows the loading error message if there is one', () => {
    store = mockStore(initialState);
    const { getByText } = render(
      <Provider store={store}>
        <Widget
          error={'There seems to be a problem'}
          pending={false}
          handleChange={handleChange}
          city={city}
          weather={weather}
        />
      </Provider>
    );
    const errorText = getByText(/Error/);
    expect(errorText).toBeInTheDocument();
  });
});
