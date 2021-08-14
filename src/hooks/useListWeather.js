import { useDispatch } from 'react-redux';
import { getLocaleDateWeather } from '../helpers/formatDate';
import { selectListWeather } from '../redux/weather/weather.actions';

export function useListWeather(currentListWeather = []) {
  const dispatch = useDispatch();
  const firstDay = currentListWeather.slice(0, 7);
  const secondDay = currentListWeather.slice(7, 15);
  const thirdDay = currentListWeather.slice(15, 23);
  const fourdDay = currentListWeather.slice(23, 31);
  const fiveDay = currentListWeather.slice(31, 39);

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
        return;
      case 1:
        dispatch(selectListWeather(secondDay));
        return;
      case 2:
        dispatch(selectListWeather(thirdDay));
        return;
      case 3:
        dispatch(selectListWeather(fourdDay));
        return;
      case 4:
        dispatch(selectListWeather(fiveDay));
        return;
      default:
        dispatch(selectListWeather(firstDay));
    }
  }

  return {
    formatDate,
    handleChageTabIndex,
    firstDay,
  };
}
