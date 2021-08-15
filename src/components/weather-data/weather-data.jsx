import { useSelector } from 'react-redux';
import { WeatherDataStyled } from './weather-data.styled';

function WeatherData() {
  const { current_weather } = useSelector(state => state.weather);
  alert(current_weather);

  // function convertKVToC(kelvinTemp) {
  //   return (kelvinTemp - 273.15).toFixed(2);
  // }
  return (
    <WeatherDataStyled>
      <div>
        <p>
          <span>Máx: </span>{' '}
          {/* <strong>{convertKVToC(current_weather.main.temp_max)} ℃</strong> */}
        </p>
        <p>
          <span>Mín: </span>{' '}
          {/* <strong>{convertKVToC(current_weather.main.temp_min)} ℃</strong> */}
        </p>
      </div>
      <div>
        <p>
          <span>Wild: </span> <strong>16 km-h</strong>
        </p>
        <p>
          <span>Humidity: </span>{' '}
          {/* <strong>{current_weather.main.humidity}%</strong> */}
        </p>
      </div>
    </WeatherDataStyled>
  );
}

export default WeatherData;
