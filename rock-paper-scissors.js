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

let humanScore = 0;
let computerScore = 0;
let winner;
// keeps track of winner when one player hits 5 points

// create three buttons, along with a parent node
const body = document.querySelector('body');
const buttonRock = document.createElement('button');
buttonRock.textContent = 'rock';
const buttonPaper = document.createElement('button');
buttonPaper.textContent = 'paper';
const buttonScissors = document.createElement('button');
buttonScissors.textContent = 'scissors';

body.appendChild(buttonRock);
body.appendChild(buttonPaper);
body.appendChild(buttonScissors);

// create div for displaying results
displayResults = document.createElement('div');
roundOutcome = document.createElement('p');
displayResults.appendChild(roundOutcome);
runningScore = document.createElement('p');
displayResults.appendChild(runningScore);
body.appendChild(displayResults);

// event listeners pass the button's textcontent as the computer selection argument to the playRound function
const buttonList = [buttonRock, buttonPaper, buttonScissors];
for (const btn of buttonList) {
    btn.addEventListener('click', () => {
        if (humanScore < 5 && computerScore < 5) {
            let computerChoice = getComputerChoice();
            // generate computer choice to get ready to play rps

            playRound(btn.textContent, computerChoice);
        }
        
    });
}

function playRound(humanChoice, computerChoice) {
    let humanChoiceLower = humanChoice.toLowerCase();

    let winCondition1 = (humanChoiceLower == "paper") && (computerChoice == "rock");
    let winCondition2 = (humanChoiceLower == "rock") && (computerChoice == "scissors");
    let winCondition3 = (humanChoiceLower == "scissors") && (computerChoice = "paper");

    let loseCondition1 = (humanChoiceLower == "paper") && (computerChoice == "scissors");
    let loseCondition2 = (humanChoiceLower == "rock") && (computerChoice == "paper");
    let loseCondition3 = (humanChoiceLower == "scissors") && (computerChoice == "rock");

    if (winCondition1 || winCondition2 || winCondition3) {
        humanScore += 1;
        // DOM method instead of console.log
        roundOutcome.textContent = `You won! ${humanChoiceLower} beats ${computerChoice}`;
    } else if (loseCondition1 || loseCondition2 || loseCondition3) {
        computerScore += 1;
        roundOutcome.textContent = `You lost! ${computerChoice} beats ${humanChoiceLower}`;
    } else {
        roundOutcome.textContent = `It's a draw!`;
    }
    runningScore.textContent = `Your score: ${humanScore}, Computer score: ${computerScore}`;
    
    // check if we have a winner
    if (humanScore == 5) {
        winner = 'Human';
    } else if (computerScore == 5) {
        winner = 'Computer';
    }

    if (humanScore == 5 || computerScore == 5) {
        runningScore.textContent = `${winner} won!`;
    }
}
