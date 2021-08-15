import React from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentWeather } from '../../redux/weather/weather.actions';
import { WidgetWeatherStyled } from './widget-weather.styled';

function WidgetWeather({ weather, idx }) {
  const dispatch = useDispatch();
  const widgetRef = React.useRef(null);
  const formatTime = new Date(weather.dt_txt).toLocaleTimeString();
  const iconWeather = weather.weather[0].main.toLowerCase();
  const image = `${process.env.PUBLIC_URL}/icons/${iconWeather}.svg`;

  function handleChangeWidgetActive() {
    const widgets = document.querySelectorAll('.widget');
    widgets.forEach(item => item.classList.remove('is-active'));
    widgetRef.current.classList.add('is-active');
    console.log(weather);
    dispatch(setCurrentWeather(weather));
  }

  return (
    <WidgetWeatherStyled
      className={`widget ${idx === 0 ? 'is-active' : ''}`}
      onClick={handleChangeWidgetActive}
      ref={widgetRef}
    >
      <span className="hour">{formatTime}</span>
      <img className="icon" src={image} alt="icon" />
      <span className="degrees">25</span>
    </WidgetWeatherStyled>
  );
}

export default WidgetWeather;
