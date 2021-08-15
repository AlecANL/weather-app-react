import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavWeather from '../components/nav-weather/nav-weather';
import {
  getDailyWeather,
  getWeahterByWeek,
  setCoordinates,
  setLogin,
} from '../redux/weather/weather.actions';
import IntroPage from '../components/intro-page/intro-page';
import { HomeStyled } from './home.styled';

function Home() {
  const dispatch = useDispatch();
  const { coordinates, isLoading, current_weather } = useSelector(
    state => state.weather
  );

  React.useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        dispatch(
          setCoordinates(position.coords.latitude, position.coords.longitude)
        );
      });
    } else {
      console.log('put another coords');
    }
  }, [dispatch]);

  React.useEffect(() => {
    if (coordinates) {
      dispatch(getWeahterByWeek(coordinates.lat, coordinates.lon));
      dispatch(getDailyWeather(coordinates.lat, coordinates.lon));
    } else {
      dispatch(getWeahterByWeek(14.305, -90.785));
    }
  }, [dispatch, coordinates]);

  React.useEffect(() => {
    setTimeout(() => {
      dispatch(setLogin(false));
    }, 1000);
  }, [dispatch]);

  if (isLoading) return <IntroPage />;

  return (
    <HomeStyled>
      <NavWeather />
    </HomeStyled>
  );
}

export default Home;
