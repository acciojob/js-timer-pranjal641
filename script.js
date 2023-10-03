 function updateTimer() {
      // Get the current date and time
      var currentDate = new Date();

      // Format the date and time as a string
      var dateString = currentDate.toLocaleString();

      // Update the timer display
      var timerElement = document.getElementById("timer");
      timerElement.textContent = dateString;
    }

    // Call the updateTimer function every second
    setInterval(updateTimer, 1000);