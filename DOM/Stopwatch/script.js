const stopwatch = document.getElementById("stopwatch");
let intervalId;
function startStopwatch() {
  intervalId = setInterval(updateTimer, 1000);
}

function updateTimer() {
  let getCurrentHour = new Date().getHours();
  let getCurrentMinute = new Date().getMinutes();
  let getCurrentSeconds = new Date().getSeconds();
  stopwatch.textContent = `${getCurrentHour} : ${getCurrentMinute} : ${getCurrentSeconds}`;
}

function pauseStopwatch() {
  clearInterval(intervalId);
}
