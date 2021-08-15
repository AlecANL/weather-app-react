import {
  getCurrentWeather,
  getWeatherByForecast,
} from '../../services/getWeather';
import { weatherTypes } from './weather.types';

function setWeatherWeek(data) {
  return {
    type: weatherTypes.GET_FORECAST_5DAYS,
    payload: data,
  };
}

export function setCoordinates(lat, lon) {
  return {
    type: weatherTypes.SET_COORDINATES,
    payload: {
      lat,
      lon,
    },
  };
}

export function setLogin(isLoading) {
  return {
    type: weatherTypes.IS_LOADING,
    payload: isLoading,
  };
}

export function getWeahterByWeek(lat, lon) {
  return async dispatch => {
    try {
      const weather = await getWeatherByForecast(lat, lon);
      // dispatch(setLogin(true));
      dispatch(setWeatherWeek(weather.list));
    } catch (error) {
      console.log(error);
    }
  };
}

export function setCurrentWeather(weather) {
  return {
    type: weatherTypes.SET_CURRENT_WEATHER,
    payload: weather,
  };
}

export function getDailyWeather(lat, lon) {
  return async dispatch => {
    try {
      const currentWeather = await getCurrentWeather(lat, lon);
      // dispatch(setLogin(true));
      dispatch(setCurrentWeather(currentWeather));
      dispatch(setWeatherByBG(currentWeather));
      // dispatch(setLogin(false));
    } catch (error) {
      console.log(error);
    }
  };
}

function setWeatherByBG(weather) {
  return {
    type: weatherTypes.SET_WEATHER_BY_BG,
    payload: weather,
  };
}

export function selectListWeather(listWeather) {
  return {
    type: weatherTypes.SELECT_LIST_WEATHER,
    payload: listWeather,
  };
}
