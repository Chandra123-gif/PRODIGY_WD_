let timer;
let count = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

const hrDisplay = document.getElementById('hr');
const minDisplay = document.getElementById('min');
const secDisplay = document.getElementById('sec');
const countDisplay = document.getElementById('count');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        count++;
        if (count === 100) {
            count = 0;
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
        }
        displayTime();
    }, 10); // 10 milliseconds for centisecond accuracy
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    count = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    displayTime();
}

function displayTime() {
    hrDisplay.textContent = String(hours).padStart(2, '0');
    minDisplay.textContent = String(minutes).padStart(2, '0');
    secDisplay.textContent = String(seconds).padStart(2, '0');
    countDisplay.textContent = String(count).padStart(2, '0');
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
