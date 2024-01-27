// Define global variables
let currentLine = 'line-1';
let data = null;

// Get DOM elements
const startButton = document.getElementById('start-button');
const userInput = document.getElementById('user-input');
const textElement = document.querySelector('.text');
const typingSound = new Audio('./sounds/typing.wav');

// Fetch content from JSON and store it globally
async function fetchData() {
  try {
    const response = await fetch('content.json');
    data = await response.json();
  } catch (error) {
    console.error(error);
  }
}

// Initialize the application
async function init() {
  await fetchData();
  startButton.addEventListener('click', startInteraction);
  userInput.addEventListener('keypress', handleUserInput);
}

// Start the interaction
async function startInteraction() {
  startButton.style.display = 'none';
  userInput.classList.remove('hidden');
  await displayLine(currentLine);
}

// Handle user input
async function handleUserInput(event) {
  if (event.keyCode === 13) { // Enter key
    event.preventDefault();
    userInput.classList.add('hidden');
    const input = userInput.value.toLowerCase();
    await processInput(input);
    userInput.value = '';
    userInput.classList.remove('hidden');
  }
}

// Process user input
async function processInput(input) {
  const answers = data[currentLine + '-answers'];
  let nextLine = answers.find(answer => input.includes(answer.text.toLowerCase()))?.next || currentLine;
  currentLine = nextLine;
  await displayLine(currentLine, input);
}

// Display a line of text
async function displayLine(lineId, input = '') {
  let line = data[lineId];
  line = line.replace('{name}', input);
  const sentences = line.split(/(?<=[.,])/).filter(Boolean);
  await typeLine(sentences);
}

// Type out a line
function typeLine(sentences) {
  return new Promise(resolve => {
    textElement.innerHTML = '';
    const instance = new TypeIt(textElement, {
      speed: 50,
      breakLines: false,
      waitUntilVisible: true,
      afterStep: playSoundEffect
    });
    sentences.forEach((sentence, index) => {
      instance.type(sentence);
      if (index === sentences.length - 1) {
        instance.exec(() => resolve());
      }
    });
    instance.go();
  });
}

// Play the sound effect
function playSoundEffect() {
  if (typingSound.paused) {
    typingSound.play().catch(console.error);
  }
}

// Initialize the app
init();
