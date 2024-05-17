let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.random();
    let computerChoice;
    if (randomNumber >= 0 && randomNumber < 0.33) {
        computerChoice = "rock";
    }
    else if (randomNumber >= 0.33 && randomNumber < 0.67) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getHumanChoice() {
    let playerChoice = prompt("Enter your choice of rock, paper, or scissors");
    return playerChoice;
}

function playRound(humanChoice, computerChoice) {
    let humanChoiceLower = humanChoice.toLowerCase();
    
}