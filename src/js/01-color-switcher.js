function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');



startBtn.addEventListener('click', onClickStartColor);
stopBtn.addEventListener('click', onClickStopColor);

let timerId = null;

function onClickStartColor() {
    startBtn.disabled = true;
    stopBtn.disabled = false;

    timerId = setInterval(() => { 
        bodyEl.style.background = getRandomHexColor();
    }, 1000);
}

function onClickStopColor() {
    startBtn.disabled = false;
    stopBtn.disabled = true;

    clearInterval(timerId);
}