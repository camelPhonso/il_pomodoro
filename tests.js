// testing tools ///////////////////////////////////
///////////////////////////////////////////////////
function isEqual(expected, output, message) {
  let defaultMessage = `expected ${expected} and got ${output}`;
  if (expected === output) {
    console.log(
      `%cPass: ${message || defaultMessage}`,
      "color:green; font-size:15px"
    );
  } else {
    console.log(`%cFAIL: ${defaultMessage}`, "color:red; font-size:15px");
  }
}

function isDifferent(expected, output, message) {
  let defaultMessage = `expected ${expected} and got ${output}`;
  if (expected !== output) {
    console.log(
      `%cPass: ${message || defaultMessage}`,
      "color:green; font-size:15px"
    );
  } else {
    console.log(`%FAIL: ${defaultMessage}`, "color:red; font-size:15px");
  }
}

function test(string, fn) {
  console.group(string);
  fn();
  console.groupEnd();
}

// testing library //////////////////////////////////////
////////////////////////////////////////////////////////
let workTimer = document.getElementById('work-timer');
workTimer.value = 0.05
let restTimer = document.getElementById('rest-timer');
restTimer.value = 0.05;
startButton.click();
let testInterval = `${parseInt(timerDisplay.innerHTML.slice(-1)) + 1}000`;
let testIncrementedInterval = `${parseInt(timerDisplay.innerHTML.slice(-1)) + 2}000`;

// countDown()
test("turnOnTomato() runs down the set work-timer", () => {
  let expectedSeconds = "00 : 03";
  let outputSeconds = timerDisplay.innerHTML;
  isEqual(expectedSeconds, outputSeconds, "a timer was set for 3 seconds");
});

test("hitting a count of 0 triggers the next timer", () => {
  let timerAtStart = tomato.dataset.timer;
  let expectedTimer;
  switch (timerAtStart) {
    case "work":
      expectedTimer = "rest";
      break;
      case "rest":
        expectedTimer = "work";
        break;
      }
      
      setTimeout(() => {
        let timerAtEnd = tomato.dataset.timer;
        isEqual(expectedTimer, timerAtEnd);
      }, testInterval);
    });
    
    // killswitch();
    // setTimeout(() => {
    //   test("killSwitch() clears the current timer", () => {
    //     startButton.click(); //triggers killswitch()
    //     let expectedCounter = ":";
    //     let outputCounter = timerDisplay.innerHTML;
    //     isEqual(expectedCounter, outputCounter, "the timer has been cleared");
    //   });

    //   changedTimer.value = 15;
    // }, testIncrementedInterval)