import {
    FETCH_WEATHER_REQUEST,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_FAILURE,
  } from "./actionTypes";
  
  export interface IWeather {
    location: {
        name: string
        region: string
        country: string
        lat: number
        lon: number
        tz_id: string
        localtime_epoch: number
        localtime: string // 2021-12-06 0:52
    }
    current: {
        last_updated_epoch: number // 1638751500,
        last_updated: string // 2021-12-06 00:45,
        temp_c: number // 4.0,
        temp_f: number // 39.2,
        is_day: number
        condition: {
            text: string
            icon: string // //cdn.weatherapi.com/weather/64x64/night/116.png,
            code: number // 1003
        }
        wind_mph: number //  5.6,
        wind_kph: number // 9.0,
        wind_degree: number // 320,
        wind_dir: string // NW,
        pressure_mb: number // 1015.0,
        pressure_in: number // 29.97,
        precip_mm:number // 0.1,
        precip_in:number // 0.0,
        humidity: number //93,
        cloud: number //75,
        feelslike_c:number // 1.3,
        feelslike_f:number // 34.3,
        vis_km: number //10.0,
        vis_miles: number //6.0,
        uv:number // 1.0,
        gust_mph: number //11.0,
        gust_kph: number //17.6
    }
}
  
  export interface WeatherState {
    pending: boolean;
    weather: IWeather;
    error: string | null;
  }
  
  export interface FetchWeatherSuccessPayload {
    weather: IWeather;
  }
  
  export interface FetchWeatherFailurePayload {
    error: string;
  }
  
  export interface FetchWeatherRequest {
    type: typeof FETCH_WEATHER_REQUEST;
    city: string
   
  }
  
  export type FetchWeatherSuccess = {
    type: typeof FETCH_WEATHER_SUCCESS;
    payload: FetchWeatherSuccessPayload;
  };
  
  export type FetchWeatherFailure = {
    type: typeof FETCH_WEATHER_FAILURE;
    payload: FetchWeatherFailurePayload;
  };
  
  export type WeatherActions =
    | FetchWeatherRequest
    | FetchWeatherSuccess
    | FetchWeatherFailure;