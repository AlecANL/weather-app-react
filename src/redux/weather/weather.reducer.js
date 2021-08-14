import { weatherTypes } from './weather.types';

const initialState = {
  current_weather: null,
  weather_forecast5Days: [],
  coordinates: null,
  isLoading: true,
  listWeatherActive: null,
};

export function WeahterReducer(state = initialState, action) {
  switch (action.type) {
    case weatherTypes.SET_COORDINATES:
      return {
        ...state,
        coordinates: action.payload,
      };
    case weatherTypes.GET_FORECAST_5DAYS:
      return {
        ...state,
        weather_forecast5Days: [...action.payload],
      };
    case weatherTypes.IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case weatherTypes.SET_CURRENT_WEATHER:
      return {
        ...state,
        current_weather: action.payload,
      };
    case weatherTypes.SELECT_LIST_WEATHER: {
      return {
        ...state,
        listWeatherActive: action.payload,
      };
    }

    default:
      return state;
  }
}
