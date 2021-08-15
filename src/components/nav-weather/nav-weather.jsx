import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useListWeather } from '../../hooks/useListWeather';
import { selectListWeather } from '../../redux/weather/weather.actions';
import Loader from '../loader/loader';
import WeatherData from '../weather-data/weather-data';
import WidgetWeather from '../widget-weather/widget-weather';
import { NavWeatherStyled } from './nav-weather.styled';

function NavWeather() {
  const daysRef = React.useRef([]);
  const dispatch = useDispatch();
  const { listWeatherActive } = useSelector(state => state.weather);
  const { weather_forecast5Days: weatherList } = useSelector(
    state => state.weather
  );

  const { formatDate, firstDay, handleChageTabIndex } =
    useListWeather(weatherList);

  const [isShow, setShow] = React.useState(true);

  function handleToggleNav() {
    setShow(!isShow);
  }

  React.useEffect(() => {
    dispatch(selectListWeather(firstDay));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  daysRef.current = formatDate.map(
    (_, i) => daysRef.current[i] ?? React.createRef()
  );

  const isActiveNav = isShow ? 'is-active' : 'line';
  return (
    <NavWeatherStyled className={isActiveNav}>
      <div className="line" onClick={handleToggleNav}></div>
      <div className="tab-day">
        {formatDate.map((date, idx) => (
          <span
            key={idx}
            className={`day ${idx === 0 ? 'is-active' : ''}`}
            onClick={() =>
              handleChageTabIndex(idx, daysRef.current[idx], daysRef)
            }
            ref={daysRef.current[idx]}
          >
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
        <WidgetWeather key={idx} weather={weather} idx={idx} />
      ))}
    </>
  );
}

export default NavWeather;
