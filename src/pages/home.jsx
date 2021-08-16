import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavWeather from '../components/nav-weather/nav-weather';
import * as weatherActions from '../redux/weather/weather.actions';
import IntroPage from '../components/intro-page/intro-page';
import WeatherCard from '../components/weather-card/weather-card';
import { HomeStyled } from './home.styled';

function Home() {
  const dispatch = useDispatch();
  const { coordinates, isLoading } = useSelector(state => state.weather);
  const { current_weather_byBG } = useSelector(state => state.weather);
  const [currentBG, setBG] = React.useState('');
  const [isShow, setShow] = React.useState(false);

  function handleToggleNav() {
    setShow(!isShow);
  }

  React.useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        dispatch(
          weatherActions.setCoordinates(
            position.coords.latitude,
            position.coords.longitude
          )
        );
      });
    } else {
      console.log('put another coords');
    }
  }, [dispatch]);

  React.useEffect(() => {
    if (coordinates) {
      dispatch(weatherActions.getWeather(coordinates.lat, coordinates.lon));
    } else {
      dispatch(weatherActions.getWeather(14.305, -90.785));
    }
  }, [dispatch, coordinates]);

  React.useEffect(() => {
    if (current_weather_byBG) {
      findBackground();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current_weather_byBG]);

  function findBackground() {
    const { weather, wind } = current_weather_byBG;
    const iconWeather = weather[0].main.toLowerCase();
    const currentTime = new Date().getHours();
    const calcWind = (wind.speed * 3.6).toFixed(2);

    if (currentTime > 18) {
      if (calcWind > 5) {
        setBG(`${process.env.PUBLIC_URL}/images/nigth-wind.jpg`);
        return;
      }
      setBG(`${process.env.PUBLIC_URL}/images/nigth-${iconWeather}.jpg`);
      return;
    } else {
      if (calcWind > 5) {
        setBG(`${process.env.PUBLIC_URL}/images/day-wind.jpg`);
        return;
      }
      setBG(`${process.env.PUBLIC_URL}/images/day-${iconWeather}.jpg`);
      return;
    }
  }

  if (isLoading) return <IntroPage />;

  return (
    <HomeStyled image={currentBG}>
      <WeatherCard isShow={isShow} weather={current_weather_byBG} />
      <NavWeather isShow={isShow} handleToggleNav={handleToggleNav} />
    </HomeStyled>
  );
}

export default Home;
