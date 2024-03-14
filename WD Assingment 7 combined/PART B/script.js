let timer;
let startDate;
let pausedTime = 0;

const timeDisplay = document.getElementById('timeDisplay');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const datePicker = document.getElementById('datePicker');

function startTimer() {
  startDate = new Date();
  timer = setInterval(updateTime, 1000);
}

function stopTimer() {
  clearInterval(timer);
  pausedTime += (new Date() - startDate);
}

function resetTimer() {
  clearInterval(timer);
  pausedTime = 0;
  timeDisplay.textContent = '00:00:00';
}

function updateTime() {
  const currentTime = new Date() - startDate + pausedTime;
  const hours = Math.floor(currentTime / 3600000);
  const minutes = Math.floor((currentTime % 3600000) / 60000);
  const seconds = Math.floor((currentTime % 60000) / 1000);

  timeDisplay.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
