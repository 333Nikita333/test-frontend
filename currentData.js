function getDayName(dayIndex) {
  const days = ['HÉT', 'KED', 'SZE', 'CSÜ', 'PÉN', 'SZO', 'VAS'];
  return days[dayIndex];
}

function addLeadingZero(number) {
  return number < 10 ? '0' + number : number;
}

function updateDateTime() {
  const currentDate = new Date();
  const dayOfWeek = getDayName(currentDate.getDay());
  const hours = addLeadingZero(currentDate.getHours());
  const minutes = addLeadingZero(currentDate.getMinutes());

  const headerDateElement = document.querySelector('.nav__header-date');
  headerDateElement.textContent = `${dayOfWeek}, ${hours}:${minutes}`;

  const millisecondsUntilNextMinute = (60 - currentDate.getSeconds()) * 1000;
  setTimeout(updateDateTime, millisecondsUntilNextMinute);
}

updateDateTime();
