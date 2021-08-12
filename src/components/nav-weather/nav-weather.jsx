import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLocaleDateWeather } from '../../helpers/formatDate';
import { selectListWeather } from '../../redux/weather/weather.actions';
import Loader from '../loader/loader';
import WeatherData from '../weather-data/weather-data';
import WidgetWeather from '../widget-weather/widget-weather';
import { NavWeatherStyled } from './nav-weather.styled';

function NavWeather() {
  const dispatch = useDispatch();
  const { listWeatherActive } = useSelector(state => state.weather);

  const { weather_forecast5Days: weatherList } = useSelector(
    state => state.weather
  );

  const [isShow, setShow] = React.useState(true);

  function handleToggleNav() {
    setShow(!isShow);
  }

  const firstDay = weatherList.slice(0, 7);
  const secondDay = weatherList.slice(7, 15);
  const thirdDay = weatherList.slice(15, 23);
  const fourdDay = weatherList.slice(23, 31);
  const fiveDay = weatherList.slice(31, 39);

  const dateWeather = [
    firstDay[0].dt_txt || new Date(),
    secondDay[0].dt_txt || new Date(),
    thirdDay[0].dt_txt || new Date(),
    fourdDay[0].dt_txt || new Date(),
    fiveDay[0].dt_txt || new Date(),
  ];

  React.useEffect(() => {
    dispatch(selectListWeather(firstDay));
  }, [dispatch]);

  const formatDate = getLocaleDateWeather(dateWeather);

  function handleChageTabIndex(idx) {
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
  // console.log(firstDay);

  const isActiveNav = isShow ? 'is-active' : 'line';
  return (
    <NavWeatherStyled className={isActiveNav}>
      <div className="line" onClick={handleToggleNav}></div>
      <div className="tab-day">
        {formatDate.map((date, idx) => (
          <span key={idx} onClick={() => handleChageTabIndex(idx)}>
            {date.weekDay}
          </span>
        ))}
      </div>
      <div className="weather-widgets">
        {listWeatherActive ? <ListWidget /> : <Loader />}
      </div>
      <WeatherData />
    </NavWeatherStyled>
  );
}

function ListWidget() {
  const { listWeatherActive } = useSelector(state => state.weather);
  return (
    <>
      {listWeatherActive.map((weather, idx) => (
        <WidgetWeather key={idx} />
      ))}
    </>
  );
}

export default NavWeather;
