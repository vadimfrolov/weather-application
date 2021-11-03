function LocalDateFromat(date) {
  return new Date(date).toLocaleDateString('en-GB', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
}

export default LocalDateFromat;
