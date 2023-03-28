const timerDisplay = document.getElementById("countdown-timer");
timerDisplay.innerHTML = ":";
const tomato = document.getElementById("tomato");
let currentState = tomato.dataset.active;
currentState = false;
// currentState set as false at deployment to evaluate as boolean

const workTimer = document.querySelector("#work-timer").value;
const restTimer = document.getElementById("rest-timer").value;

// countdown ////////////////////////////////////
////////////////////////////////////////////////
function killswitch(timer, interval) {
  if (timer < 0) return clearInterval(interval);
}

let countDown = (timer) => {
  let total = timer * 60;
  let interval = setInterval(() => {
    let seconds = `0${Math.floor(total % 60)}`.slice(-2);
    let minutes = `0${Math.floor(total / 60)}`.slice(-2);
    timerDisplay.innerHTML = `${minutes} : ${seconds}`;
    total--;
    killswitch(total, interval); // replace with callback ??
  }, 1000);
};

// timeout functions //////////////////////////
//////////////////////////////////////////////

// envent listeners ////////////////////////
///////////////////////////////////////////
function turnOnTomato() {
  let workButton = document.getElementById("work-button");
  let restButton = document.getElementById("rest-work");

  currentState = true;
  countDown(workTimer);
  workButton.checked = true;
}

tomato.addEventListener("click", turnOnTomato);
