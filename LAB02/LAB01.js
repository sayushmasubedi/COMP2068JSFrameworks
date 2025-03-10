const prompt = require('prompt-sync')();

const choices = ['ROCK', 'PAPER', 'SCISSORS'];

function getUserSelection() {
    let userSelection = prompt('Choose ROCK, PAPER, or SCISSORS: ').trim().toUpperCase();
    return choices.includes(userSelection) ? userSelection : getUserSelection();
}

function getComputerSelection() {
    return choices[Math.floor(Math.random() * 3)];
}

function determineWinner(user, computer) {
    if (user === computer) return "It's a tie";
    if ((user === 'ROCK' && computer === 'SCISSORS') ||
        (user === 'SCISSORS' && computer === 'PAPER') ||
        (user === 'PAPER' && computer === 'ROCK')) {
        return "User Wins";
    }
    return "Computer Wins";
}

const userSelection = getUserSelection();
const computerSelection = getComputerSelection();

console.log(`User selected: ${userSelection}`);
console.log(`Computer selected: ${computerSelection}`);
console.log(determineWinner(userSelection, computerSelection));
