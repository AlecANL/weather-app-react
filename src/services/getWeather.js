const api_key = 'abfead4afed239f6683826deadb31099';
const baseUrlCurrentWeather = 'https://api.openweathermap.org/data/2.5/weather';
const baseUrlForecastWeather =
  'https://api.openweathermap.org/data/2.5/forecast';
// ?lat=14.305&lon=-90.785&cnt=5&appid=abfead4afed239f6683826deadb31099

export async function getWeatherByForecast(lat, lon) {
  try {
    const response = await fetch(
      `${baseUrlForecastWeather}?lat=${lat}&lon=${lon}&appid=${api_key}`
    );
    const weather = await response.json();
    return weather;
  } catch (error) {
    console.warn(error);
    throw new Error(error);
  }
}

export async function getCurrentWeather(lat, lon) {
  try {
    const response = await fetch(
      `${baseUrlCurrentWeather}?lat=${lat}&lon=${lon}&appid=${api_key}`
    );
    const currentWeather = await response.json();
    return currentWeather;
  } catch (error) {
    console.warn(error);
    throw new Error(error);
  }
}
