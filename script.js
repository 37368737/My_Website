window.onload = function() {
    alert("Welcome to My Website!");
  };

let inputDate = index.getElementById("input-date");
let inputTime = index.getElementById("input-time");
let countdownDisplay = index.getElementById("countdown");
// Getting the user date and time input
let userInputDate = new Date(inputDate.value + "T" + inputTime.value);
// Gettint the current date and time
const currentDate = new Date();
// Calculate the difference
const timeDiff = userInputDate.getTime() - currentDate.getTime();

//Calculate all elements
let seconds = Math.floor(timeDiff / 1000);
let minutes = Math.floor(seconds / 60);
let hours = Math.floor(minutes / 60);
let days = Math.floor(hours / 24);

//Calculate all remaining values
hours = hours % 24;
minutes = minutes % 60;
seconds = seconds % 60;

//Display the countdown
index.getElementById("countdown").innerHTML = "Time remaining: "+ days + "days " + hours + "hours " + minutes + "minutes " + seconds + "seconds";