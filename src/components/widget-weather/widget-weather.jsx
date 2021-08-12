import { WidgetWeatherStyled } from './widget-weather.styled';

function WidgetWeather() {
  return (
    <WidgetWeatherStyled>
      <span className="hour">Now</span>
      <img
        className="icon"
        src={`${process.env.PUBLIC_URL}/icons/clounds.svg`}
        alt="icon"
      />
      <span className="degrees">25</span>
    </WidgetWeatherStyled>
  );
}

export default WidgetWeather;
