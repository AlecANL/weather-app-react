import React from 'react';
import { Provider } from 'react-redux';
import { AppStyled } from './app.styled';
import { store } from './redux/store';
import Home from './pages/home';

// const baseUrlCurrentWeather = 'https://api.openweathermap.org/data/2.5/weather';
// const api_key = 'abfead4afed239f6683826deadb31099';
// this endpoint in this api provide weahter by next 5 days
// https://api.weatherbit.io/v2.0/forecast/hourly?lat=14.305&lon=-90.785&key=e29459e0e5b34e10b3334a86855f21d1&hours=120

// import IntroPage from './components/intro-page/intro-page';

// const api_url = 'https://api.openweathermap.org/data/2.5/weather';
// '?lat=14.305&lon=-90.785&appid=';
// https://api.openweathermap.org/data/2.5/forecast?lat=14.305&lon=-90.785&appid=abfead4afed239f6683826deadb31099'
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// https://api.openweathermap.org/data/2.5/forecast/daily?lat=14.305&lon=-90.785&cnt=5&appid=abfead4afed239f6683826deadb31099
function App() {
  const containerRef = React.useRef(null);

  // if (weather.isLoading || weather.isError) return <IntroPage />;

  return (
    <Provider store={store}>
      <AppStyled ref={containerRef}>
        <Home />
      </AppStyled>
    </Provider>
  );
}

export default App;
