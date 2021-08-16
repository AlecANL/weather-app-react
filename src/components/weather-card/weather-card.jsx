import { formatDate } from '../../helpers/formatDate';
import { WeatherCardStyled } from './weather-card.styled';

function WeatherCard({ isShow, weather }) {
  const currentLocaleDate = formatDate(new Date(weather.dt * 1000));
  const temp = (weather.main.temp - 273.15).toFixed(0);
  console.log(weather);
  return (
    <WeatherCardStyled className={isShow ? 'is-active' : ''}>
      <div className="current-degrees">
        <span>{temp}°C</span>
      </div>
      <div className="current-placement">
        <div className="current-date">
          <span>{currentLocaleDate.weekDay}</span>
          <span>{currentLocaleDate.day}</span>
          <span>{currentLocaleDate.month}</span>
        </div>
        <div className="location">
          <img
            src={`${process.env.PUBLIC_URL}/icons/map-widget.svg`}
            alt="map widget"
          />
          <span>{weather.name}</span>
        </div>
      </div>
    </WeatherCardStyled>
  );
}

export default WeatherCard;
