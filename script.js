function dateDisplay() {
  const dayofWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const now = new Date();

  const timeUTC = document.querySelector('[data-testid="currentTimeUTC"]');
  const utcday = document.querySelector('[data-testid="currentDay"]');
  timeUTC.innerHTML = `Current Time in UTC : ${now.toUTCString()}`;
  utcday.innerHTML = `Current Day of the week : ${dayofWeek[now.getDay()]}`;

  setInterval(dateDisplay, 1000);
}

dateDisplay();
