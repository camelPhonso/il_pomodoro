const timerDisplay = document.getElementById("countdown-timer");
timerDisplay.innerHTML = ":";
const tomato = document.getElementById("tomato");
let currentState = tomato.dataset.active;
let currentTimer = tomato.dataset.timer;
let allIntervals = [];

// countdown ////////////////////////////////////
////////////////////////////////////////////////
function killswitch() {
  allIntervals.forEach((interval) => clearInterval(interval));
  if (currentState === "true") return switchTimer();
  
  timerDisplay.innerHTML = ":";
  let radioButtons = document.querySelectorAll('input[type=radio]');
  radioButtons.forEach(button => button.checked = false);
}

function switchTimer() {
  let workButton = document.getElementById("work-button");
  let restButton = document.getElementById("rest-button");

  switch (currentTimer) {
    case "work":
      restButton.click();
      break;
    case "rest":
      workButton.click();
      break;
  }
}

function displayCountDown(total) {
  let seconds = `0${Math.floor(total % 60)}`.slice(-2);
  let minutes = `0${Math.floor(total / 60)}`.slice(-2);
  
  timerDisplay.innerHTML = `${minutes} : ${seconds}`;
}

function countDown(timer) {
  let total = timer * 60;
  displayCountDown(total);

  let interval = setInterval(() => {
    displayCountDown(total);
    total--;
    if (total < 0) return killswitch();
  }, 1000);

  allIntervals.push(interval);
};

function turnOnTomato() {
  switch (currentState) {
    case "false":
      currentState = "true";
      workButton.click();
      break;
    case "true":
      currentState = "false";
      killswitch();
      break;
  }
}

// envent listeners ////////////////////////
///////////////////////////////////////////
let workButton = document.getElementById("work-button");
let restButton = document.getElementById("rest-button");
let startButton = document.getElementById("start-button");

startButton.addEventListener("click", () => turnOnTomato());

workButton.addEventListener("click", () => {
  let workTimer = document.getElementById("work-timer").value;
  tomato.dataset.timer = "work";
  countDown(workTimer);
});

restButton.addEventListener("click", () => {
  let restTimer = document.getElementById("rest-timer").value;
  tomato.dataset.timer = "rest";
  countDown(restTimer);
});
