const output = document.getElementById('output');
const input = document.getElementById('input');

let gameState = 'start';
let userHealth = 100;
let userMana = 10;
let monsterHealth = 100;

function typeText(text) {
    output.textContent += text;
}

function startGame() {
    typeText("Thank you so much for checking out my website! Assuming the only users that will interact with this will be bots or recruiters, I hope to give you recruiters the opportunity for a fun break from the usual slog of resumes. If you would like to continue to see how I have tried to do this, please type 'continue' then press enter. If not, and you just want the information from my resume, please type 'nofun'.\n");
}

// Add functions for adventure sections, monster fights, spell casting, etc.

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleInput(input.value);
        input.value = '';
    }
});

function handleInput(command) {
    if (gameState === 'start') {
        if (command === 'continue') {
            gameState = 'adventure';
            typeText("You are a wizard and have been cast out of magic school. You have been told that if, and only if, you are able to gather the four pages of the ancient text will you be able to rejoin the school. It is at this point you find yourself...\n");
        } else if (command === 'nofun') {
            typeText("Filler text for all resume information\n");
        } else {
            typeText("Invalid command. Please try again.\n");
        }
    } else if (gameState === 'adventure') {
        // Handle adventure section commands
    } else if (gameState === 'fight') {
        // Handle monster fight commands
    }
}

startGame();
