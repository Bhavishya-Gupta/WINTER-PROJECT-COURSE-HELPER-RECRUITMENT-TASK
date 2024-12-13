// Define the countdown target date
const targetDate = new Date("January 1, 2025 00:00:00").getTime();

// Get references to the HTML elements
const countdownTimer = document.getElementById('countdown-timer');
const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');
const previewButton = document.getElementById('preview-button');

// Initialize the countdown interval
let countdownInterval;

// Function to update the countdown
function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    clearInterval(countdownInterval);
    countdownTimer.textContent = "00:00:00:00";
    alert("Happy New Year 2025");
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownTimer.textContent = `${formatTime(days)}:${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

// Function to format time to always show two digits
function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

// Start the countdown when the start button is clicked
startButton.addEventListener('click', () => {
  countdownInterval = setInterval(updateCountdown, 1000);
});

// Reset the countdown when the reset button is clicked
resetButton.addEventListener('click', () => {
  clearInterval(countdownInterval);
  countdownTimer.textContent = "00:00:00:00";
});

// Show a New Year preview message when the preview button is clicked
previewButton.addEventListener('click', () => {
  alert("🎆Wishing you a joyful, prosperous, and successful New Year 2025!🎇");
});
