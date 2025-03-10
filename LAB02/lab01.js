const prompt = require('prompt-sync')();

function getUserSelection() {
    let userSelection;
    const validChoices = ['ROCK', 'PAPER', 'SCISSORS'];
    
    while (true) {
        userSelection = prompt('Choose ROCK, PAPER, or SCISSORS: ').toUpperCase();
        if (validChoices.includes(userSelection)) {
            return userSelection;
        } else {
            console.log('Invalid choice. Please enter ROCK, PAPER, or SCISSORS.');
        }
    }
}

function getComputerSelection() {
    const randomNum = Math.random();
    if (randomNum < 0.34) {
        return 'PAPER';
    } else if (randomNum < 0.68) {
        return 'SCISSORS';
    } else {
        return 'ROCK';
    }
}

function determineWinner(user, computer) {
    if (user === computer) {
        return "It's a tie";
    }
    
    if (
        (user === 'ROCK' && computer === 'SCISSORS') ||
        (user === 'SCISSORS' && computer === 'PAPER') ||
        (user === 'PAPER' && computer === 'ROCK')
    ) {
        return "User Wins";
    } else {
        return "Computer Wins";
    }
}

const userSelection = getUserSelection();
const computerSelection = getComputerSelection();

console.log(`User selected: ${userSelection}`);
console.log(`Computer selected: ${computerSelection}`);
console.log(determineWinner(userSelection, computerSelection));
