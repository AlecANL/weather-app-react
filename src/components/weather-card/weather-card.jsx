import { WeatherCardStyled } from './weather-card.styled';

function WeatherCard({ isShow }) {
  return (
    <WeatherCardStyled className={isShow ? 'is-active' : ''}>
      <div className="current-degrees">
        <span>25</span>
      </div>
      <div className="current-placement">
        <span>tuesday, 15 july</span>
        <div className="location">
          <img
            src={`${process.env.PUBLIC_URL}/icons/map-widget.svg`}
            alt="map widget"
          />
          <span>Location</span>
        </div>
      </div>
    </WeatherCardStyled>
  );
}

export default WeatherCard;
