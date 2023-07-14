// Calculate the age of a person in days, months and years
function calculateAge() {
  const dayValue = parseInt(day.value);
  const monthValue = parseInt(month.value);
  const yearValue = parseInt(year.value);

  let currentDate = new Date();
  let currentDay = currentDate.getDate();
  let currentMonth = currentDate.getMonth() + 1;
  let currentYear = currentDate.getFullYear();

  const monthArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (dayValue > currentDay) {
    currentDay = currentDay + monthArr[currentMonth - 1];
    console.log(currentDay);
    currentMonth = currentMonth - 1;
  }

  if (monthValue > currentMonth) {
    currentMonth = currentMonth + 12;
    currentYear = currentYear - 1;
  }

  let days = currentDay - dayValue;
  let months = currentMonth - monthValue;
  let years = currentYear - yearValue;

  return {
    day: days,
    month: months,
    year: years,
  };
}

// Format number as money
function formatMoney(number) {
  return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}
