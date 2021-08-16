export function formatDate(date = new Date()) {
  const month = date.toLocaleDateString('en-us', {
    month: 'long',
  });
  const weekDay = date.toLocaleDateString('en-us', {
    weekday: 'long',
  });
  const year = date.toLocaleDateString('en-us', {
    year: 'numeric',
  });
  const monthPosition = date.toLocaleDateString('en-us', {
    month: 'numeric',
  });
  const day = date.toLocaleDateString('en-Us', {
    day: 'numeric',
  });
  return {
    month,
    weekDay,
    year,
    day,
    monthPosition,
  };
}

export function getLocaleDateWeather(listDateWeahter = []) {
  return listDateWeahter.map(dateItem => formatDate(new Date(dateItem)));
}
