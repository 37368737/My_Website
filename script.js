
// Update the countdown every second
const countdownTimer = setInterval(function() {
  
    // Get the input values for the date and time
    const inputDate = document.getElementById("input-date").value;
    const inputTime = document.getElementById("input-time").value;

    // Set the countdown date (replace with your desired date and time)
    countdownDate = new Date(inputDate + " " + inputTime);

  // Get the current date and time
  const currentDate = new Date();

  // Calculate the time between now and the countdown date
  const timeDiff = countdownDate.getTime() - currentDate.getTime();

  // Calculate the days, hours, minutes, and seconds
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("countdown").innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

  // If the countdown is finished, display a message
  if (timeDiff < 0) {
    clearInterval(countdownTimer);
    document.getElementById("countdown").innerHTML = "Event has started!";
  }
}, 1000);
