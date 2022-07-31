const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

const SET_INTERVAL = 1000;
let timerId = null;

refs.startBtn.addEventListener('click', setChangeColor);
refs.stopBtn.addEventListener('click', stopChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function setChangeColor() {
    timerId = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor();
    }, SET_INTERVAL); 
    refs.startBtn.setAttribute ('disabled', 'disabled');
    refs.stopBtn.removeAttribute ('disabled')
}

function stopChangeColor() {
    clearInterval(timerId);
    refs.stopBtn.setAttribute ('disabled', 'disabled')
    refs.startBtn.removeAttribute ('disabled')
}