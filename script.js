let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function updateTime() {
  const currentTime = Date.now() - startTime + elapsedTime;
  const hours = String(Math.floor(currentTime / 3600000)).padStart(2, '0');
  const minutes = String(Math.floor((currentTime % 3600000) / 60000)).padStart(2, '0');
  const seconds = String(Math.floor((currentTime % 60000) / 1000)).padStart(2, '0');

  document.getElementById('display').textContent = `${hours}:${minutes}:${seconds}`;
}

function start() {
  if (!timerInterval) {
    startTime = Date.now();
    timerInterval = setInterval(updateTime, 1000);
  }
}

function pause() {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime += Date.now() - startTime;
}

function reset() {
  clearInterval(timerInterval);
  timerInterval = null;
  startTime = 0;
  elapsedTime = 0;
  document.getElementById('display').textContent = '00:00:00';
}