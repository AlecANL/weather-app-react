import { useDispatch } from 'react-redux';
import { getLocaleDateWeather } from '../helpers/formatDate';
import {
  selectListWeather,
  setCurrentWeather,
} from '../redux/weather/weather.actions';

export function useListWeather(currentListWeather = []) {
  const dispatch = useDispatch();
  const firstDay = currentListWeather.slice(0, 8);
  const secondDay = currentListWeather.slice(8, 16);
  const thirdDay = currentListWeather.slice(16, 24);
  const fourdDay = currentListWeather.slice(24, 32);
  const fiveDay = currentListWeather.slice(32, 40);

  const dateWeather = [
    firstDay[0].dt_txt || new Date(),
    secondDay[0].dt_txt || new Date(),
    thirdDay[0].dt_txt || new Date(),
    fourdDay[0].dt_txt || new Date(),
    fiveDay[0].dt_txt || new Date(),
  ];

  const formatDate = getLocaleDateWeather(dateWeather);

  function handleChangeElementActive(listElements = [], element) {
    listElements.current.forEach(el => {
      el.current.classList.remove('is-active');
    });
    element.current.classList.add('is-active');
  }

  function handleChageTabIndex(idx, element, listElements) {
    handleChangeElementActive(listElements, element);
    switch (idx) {
      case 0:
        dispatch(selectListWeather(firstDay));
        dispatch(setCurrentWeather(firstDay[0]));
        return;
      case 1:
        dispatch(selectListWeather(secondDay));
        dispatch(setCurrentWeather(secondDay[0]));

        return;
      case 2:
        dispatch(selectListWeather(thirdDay));
        dispatch(setCurrentWeather(thirdDay[0]));

        return;
      case 3:
        dispatch(selectListWeather(fourdDay));
        dispatch(setCurrentWeather(firstDay[0]));

        return;
      case 4:
        dispatch(selectListWeather(fiveDay));
        dispatch(setCurrentWeather(firstDay[0]));

        return;
      default:
        dispatch(selectListWeather(firstDay));
        dispatch(setCurrentWeather(firstDay[0]));
    }
  }

  return {
    formatDate,
    handleChageTabIndex,
    firstDay,
  };
}
