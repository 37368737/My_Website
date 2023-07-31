function startAlarm(){
  // Play the alarm sound
  const alarmSound = document.getElementById("alarm-sound");
  alarmSound.play();
}
// Function to dismiss the alarm
function dismissAlarm() {
  const alarmSound = document.getElementById("alarm-sound");
  alarmSound.pause();
  alarmSound.currentTime = 0; // Reset the audio to the beginning
  document.getElementById("dismiss-button").style.display = "none"; // Hide the dismiss button
}

// Update the countdown every second
const countdownTimer = setInterval(function() {
  
    // Get the input values for the date and time
    const inputDate = document.getElementById("input-date").value;
    const inputTime = document.getElementById("input-time").value;
    const dismiss = document.getElementById("dismiss-button").style.display = "block";

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
  document.getElementById("message").innerHTML = " ";
  document.getElementById("countdown").innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

  // If the countdown is finished, display a message
  if (isNaN(days)){
    document.getElementById("message").innerHTML = "No date/time added";
    document.getElementById("countdown").innerHTML = " ";
  }
  else if(days < 0){
    if (hours >= 0){
    document.getElementById("message").innerHTML = " ";
    document.getElementById("countdown").innerHTML = `${0} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
    }
    else if (hours<0){
        if (minutes >= 0){
            document.getElementById("message").innerHTML = " ";
            document.getElementById("countdown").innerHTML = `${0} days ${0} hours ${minutes} minutes ${seconds} seconds`;
        }
        else if (minutes < 0){
            if(seconds>=0){
                document.getElementById("message").innerHTML = " ";
                document.getElementById("countdown").innerHTML = `${0} days ${0} hours ${0} minutes ${seconds} seconds`;
            }
            else if (seconds<0){
                document.getElementById("message").innerHTML = "Event has started!";
                document.getElementById("countdown").innerHTML = " ";

                // Display a notification if the browser supports it
                if (Notification && Notification.permission === "granted") {
                new Notification("Event has started!");
          }

          // Clear the input fields
          inputTime.value = "";
          inputDate.value = "";
        }   
      }
    }
  }
}, 1000);