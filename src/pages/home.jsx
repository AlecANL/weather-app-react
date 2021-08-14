import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavWeather from '../components/nav-weather/nav-weather';
import {
  getDailyWeather,
  getWeahterByWeek,
  setCoordinates,
} from '../redux/weather/weather.actions';
import IntroPage from '../components/intro-page/intro-page';

function Home() {
  const dispatch = useDispatch();
  const { coordinates, isLoading } = useSelector(state => state.weather);

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

  if (isLoading) return <IntroPage />;

  return (
    <>
      <NavWeather />
    </>
  );
}

export default Home;
