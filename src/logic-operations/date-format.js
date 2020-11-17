const getFormatDate = dateString => {
  const dateResponse = new Date(dateString);
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currDate = dateResponse.getDate();
  const currWeekDay = dateResponse.getDay();
  return `${days[currWeekDay]} ${currDate}`;
};

const getMonthString = dateIndex => {
  const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
  return months[dateIndex];
};

export { getFormatDate, getMonthString };
