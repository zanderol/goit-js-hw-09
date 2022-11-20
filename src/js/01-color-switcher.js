const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
let intervalId;
btnStop.disabled = true;

btnStart.addEventListener('click', onBtnStartClick);
btnStop.addEventListener('click', onBtnStopClick);

function changeBtnStatus() {
  btnStart.disabled = !btnStart.disabled;
  btnStop.disabled = !btnStop.disabled;
}

function onBtnStartClick() {
  intervalId = setInterval(changeBodyColor, 1000);
  changeBtnStatus();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBodyColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function onBtnStopClick() {
  clearInterval(intervalId);
  changeBtnStatus();
}
