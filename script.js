const now = new Date();
const currentTimeUTC = now.toUTCString();

const utcTimeElement = document.querySelector('[data-testid="utc-time"]');
utcTimeElement.textContent = currentTimeUTC;


function updateUTCDay() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();
    const dayOfWeekUTC = daysOfWeek[now.getUTCDay()];

    const utcDayElement = document.document.querySelector('[data-testid="utc-day"]');
    utcDayElement.textContent = `Current day in UTC: ${dayOfWeekUTC}`;
}

