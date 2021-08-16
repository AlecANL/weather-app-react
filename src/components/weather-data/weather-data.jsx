import { useSelector } from 'react-redux';
import { WeatherDataStyled } from './weather-data.styled';

function WeatherData() {
  const { current_weather } = useSelector(state => state.weather);
  const minTemp = current_weather.main.temp_min;
  const maxTemp = current_weather.main.temp_max;
  const windSpeed = current_weather.wind.speed;

  function convertMSToKH(windSpeed) {
    return (windSpeed * 3.6).toFixed(2);
  }
  function convertKVToC(kelvinTemp) {
    return (kelvinTemp - 273.15).toFixed(2);
  }

  return (
    <WeatherDataStyled>
      <div>
        <p>
          <span>Máx: </span>
          <strong>{convertKVToC(maxTemp)} ℃</strong>
        </p>
        <p>
          <span>Mín: </span>
          <strong>{convertKVToC(minTemp)} ℃</strong>
        </p>
      </div>
      <div>
        <p>
          <span>Wild: </span> <strong>{convertMSToKH(windSpeed)} Km-h</strong>
        </p>
        <p>
          <span>Humidity: </span>{' '}
          <strong>{current_weather.main.humidity}%</strong>
        </p>
      </div>
    </WeatherDataStyled>
  );
}

export default WeatherData;
