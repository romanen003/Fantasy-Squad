export const getCurrentTime = (endTime) => {
  const value = typeof endTime === 'undefined' ? '00:00' : endTime;
  const [hour, minute] = value.split(':');

  const data = new Date();
  const minutes = minute < 10 ? 60 - data.getMinutes() - 1 : minute - data.getMinutes() - 1;
  const seconds = 60 - data.getSeconds();

  const currentMinutes = minutes > 9 ? minute - minutes : `0${minutes}`;
  const currentSeconds = seconds > 9 ? seconds : `0${seconds}`;

  return `${currentMinutes < 0 ? 0 : currentMinutes} : ${currentSeconds < 0 ? 0 : currentSeconds} `;
};
