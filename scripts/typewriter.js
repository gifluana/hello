// Function to play sound effect
function playSound(soundFile) {
    // Create a new Audio instance for each sound playback
    new Audio(`./sounds/${soundFile}`).play().catch(console.error);
}

// Helper function for delay
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to add character to text display with punctuation-based pauses
async function addChar(char, textDisplay) {
    try {
        textDisplay.textContent += char;
        playSound('typing.wav'); // Play typing sound

        // Pause for 0.5 seconds if the character is a comma
        if (char === ',') {
            await wait(500);
        }
        // Pause for 1 second if the character is a period
        else if (char === '.' || char === '!' || char === '?') {
            await wait(1000);
        }
        // Standard typing speed delay for other characters
        else {
            await wait(50);
        }
    } catch (error) {
        console.error('Error in addChar:', error);
    }
}

// Function to remove last character from text display, keeping the '> ' prefix
async function removeChar(textDisplay) {
    try {
        await wait(10);
        textDisplay.textContent = textDisplay.textContent.slice(0, -1);
    } catch (error) {
        console.error('Error in removeChar:', error);
    }
}

// Function to update text in text display
async function updateText(newText, textDisplay) {
    try {
        userInput.classList.add('hidden');

        // Convert newText to lowercase
        playSound('erasing.wav'); // Play erasing sound once before erasing
        newText = newText.toLowerCase();

        // Clear existing text if any
        while (textDisplay.textContent.length) {
            await removeChar(textDisplay);
        }

        // Pause for 1 second after clearing and before typing new text
        await wait(1000);

        // Type new text
        for (const char of newText) {
            await addChar(char, textDisplay);
        }

        userInput.classList.remove('hidden');

        userInput.focus();
    } catch (error) {
        console.error('Error in updateText:', error);
    }
}

export default updateText;