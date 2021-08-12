import { combineReducers } from 'redux';
import { WeahterReducer } from './weather/weather.reducer';

export const rootReducer = combineReducers({
  weather: WeahterReducer,
});
