import gameData from './gamedata.js';
import updateText from './typewriter.js';

let currentStage = 0;
let previousStage = 0;
let userInput = document.getElementById('userInput');
let textDisplay = document.getElementById('textDisplay');

// Define userAnswers here
let userAnswers = {};

// Get the play button
const playButton = document.getElementById('playButton');

playButton.addEventListener('click', async function () {
    // Hide the button
    playButton.style.display = 'none';

    // Display the textDisplay
    textDisplay.style.display = 'block';

    // Start the game
    await updateText(gameData[currentStage].question, textDisplay); // Display the first question
    userInput.focus();
    userInput.addEventListener('keypress', handleInput);
});

// Function to handle user input
async function handleInput(event) {
    try {
        if (event.key !== 'Enter') return;
        event.preventDefault();
        let inputText = userInput.value.trim().toLowerCase(); // Convert input to lowercase

        // If user types 'back', go to the previous stage
        if (inputText === 'back') {
            if (previousStage >= 0) {
                currentStage = previousStage;
                await updateText('you forget what I said? Alright, I\'ll say it again.', textDisplay); // Display the message
                await updateText(gameData[currentStage].question, textDisplay); // Display the previous question
            }
            userInput.value = ''; // Clear input field
            return;
        }

        // Store user's name if current stage is 1
        if (currentStage === 1) {
            userAnswers.name = inputText;
        }

        userInput.value = ''; // Clear input field

        if (textDisplay) {
            let response;
            let foundAnswer = Object.keys(gameData[currentStage].answers).find(answer => inputText.includes(answer)); // Check if input includes any answer
            if (foundAnswer) {
                response = gameData[currentStage].answers[foundAnswer].response;
                previousStage = currentStage; // Store the current stage as the previous stage
                currentStage = gameData[currentStage].answers[foundAnswer].nextStage; // Move to the specified stage
            } else {
                // Generate defaultAnswer dynamically
                if (currentStage === 1) {
                    response = `Nice to meet you! ${userAnswers.name}! Ready for the next question?`;
                } else {
                    response = gameData[currentStage].defaultAnswer;
                }
                if (gameData[currentStage].acceptAnyInput) {
                    previousStage = currentStage; // Store the current stage as the previous stage
                    currentStage = gameData[currentStage].nextStage; // Move to the next stage if any input is acceptable
                }
            }
            await updateText(response, textDisplay);
            if (currentStage < gameData.length) {
                await updateText(gameData[currentStage].question, textDisplay); // Display the next question
            }
        }
    } catch (error) {
        console.error('Error in handleInput:', error);
    }
}