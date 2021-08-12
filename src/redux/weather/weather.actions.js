import { getWeatherByForecast } from '../../services/getWeather';
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

function setLogin(isLoading) {
  return {
    type: weatherTypes.IS_LOADING,
    payload: isLoading,
  };
}

export function getWeahterByWeek(lat, lon) {
  return async dispatch => {
    try {
      const weather = await getWeatherByForecast(lat, lon);
      dispatch(setWeatherWeek(weather.list));
      dispatch(setLogin(false));
    } catch (error) {
      console.log(error);
    }
  };
}

export function selectListWeather(listWeather) {
  return {
    type: weatherTypes.SELECT_LIST_WEATHER,
    payload: listWeather,
  };
}
