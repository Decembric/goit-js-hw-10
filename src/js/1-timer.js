import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css"


const btnRef = document.querySelector('button[data-start]');
const hoursRef = document.querySelector('span[data-hours]');
const daysRef = document.querySelector('span[data-days]');
const minutesRef = document.querySelector('span[data-minutes]');
const secondsRef = document.querySelector('span[data-seconds]');
const datetimePicker = flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    let userSelectedDate = selectedDates[0].getTime();
    const dateNow = new Date();
    if (userSelectedDate < dateNow.getTime()) {
      iziToast.show({
    message: 'Please choose a date in the future'
});
      btnRef.disabled = true;
    } else {
      btnRef.disabled = false;
    }
  },
});
let timerId;
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  let days = Math.floor(ms / day);
  let hours = Math.floor((ms % day) / hour);
  let minutes = Math.floor(((ms % day) % hour) / minute);
  let seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}
function updateDateTime() {
  const selectedDate = datetimePicker.selectedDates[0].getTime();
  const currentDate = new Date().getTime();
  const difference = selectedDate - currentDate;
  const { days, hours, minutes, seconds } = convertMs(difference);
  daysRef.textContent = days > 0 ? addingZero(days) : '0';
  hoursRef.textContent = hours > 0 ? addingZero(hours) : '0';
  minutesRef.textContent = minutes > 0 ? addingZero(minutes) : '0';
  secondsRef.textContent = seconds > 0 ? addingZero(seconds) : '0';
  if (difference <= 0) {
    clearInterval(timerId);
    return;
  }
}
function addingZero(value) {
  return value.toString().padStart(2, '0');
}
function onBtnClick() {
     btnRef.disabled = true;
  updateDateTime();
  timerId = setInterval(() => updateDateTime(), 1000);
}
btnRef.addEventListener('click', onBtnClick);