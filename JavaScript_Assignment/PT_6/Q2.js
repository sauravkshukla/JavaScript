// Delay time (in milliseconds)
let delay = 3000;

// Function to generate a random number
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
}

// Function to display countdown and then generate random number
function countdownAndGenerateRandom() {
    let timeRemaining = delay / 1000; // Convert milliseconds to seconds
    
    // Interval to display the time remaining each second
    let countdown = setInterval(() => {
        console.log(`Time remaining: ${timeRemaining} seconds`);
        timeRemaining--;

        // When the countdown reaches zero
        if (timeRemaining < 0) {
            clearInterval(countdown); // Stop the interval
            let randomNumber = generateRandomNumber();
            console.log(`Random Number Generated: ${randomNumber}`);
        }
    }, 1000); // Interval runs every 1 second
}

// Start the countdown and random number generation
countdownAndGenerateRandom();
