// Initial space facts
let spaceFacts = [
    "A year on Mercury is just 88 days long.",
    "Venus is the hottest planet in our solar system.",
    "Jupiter has the shortest day of all the planets.",
    "The Sun contains 99.86% of the mass in the Solar System.",
    "There are more stars in space than grains of sand on Earth.",
    "One day on Venus is longer than its year.",
    "The Great Red Spot on Jupiter is shrinking.",
    "Saturn's rings are mostly made of ice and rock.",
    "Light from the Sun takes 8 minutes to reach Earth.",
    "The spacewalk record is held by Russian astronaut Anatoly Solovyev."
];

// DOM elements
const factDisplay = document.getElementById('fact-display');
const generateBtn = document.getElementById('generate-btn');
const newFactInput = document.getElementById('new-fact');
const addFactBtn = document.getElementById('add-fact-btn');

// Generate random fact
function generateFact() {
    const randomIndex = Math.floor(Math.random() * spaceFacts.length);
    factDisplay.textContent = spaceFacts[randomIndex];
    factDisplay.style.opacity = 0;
    setTimeout(() => {
        factDisplay.style.opacity = 1;
    }, 100);
}

// Add new fact
function addFact() {
    const newFact = newFactInput.value.trim();
    if (newFact && newFact.length > 0) {
        spaceFacts.push(newFact);
        newFactInput.value = '';
        alert('Fact added successfully!');
    } else {
        alert('Please enter a valid fact!');
    }
}

// Event listeners
generateBtn.addEventListener('click', generateFact);
addFactBtn.addEventListener('click', addFact);

// Generate initial fact
generateFact();
