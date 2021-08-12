import { WeatherDataStyled } from './weather-data.styled';

function WeatherData() {
  return (
    <WeatherDataStyled>
      <div>
        <p>
          <span>Máx: </span> <strong>26</strong>
        </p>
        <p>
          <span>Mín: </span> <strong>19</strong>
        </p>
      </div>
      <div>
        <p>
          <span>Wild: </span> <strong>16 km-h</strong>
        </p>
        <p>
          <span>Humidity: </span> <strong>63%</strong>
        </p>
      </div>
    </WeatherDataStyled>
  );
}

export default WeatherData;
