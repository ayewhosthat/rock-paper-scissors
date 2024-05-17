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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    for (let i = 1; i <= 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        
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
            console.log(`You won! ${humanChoiceLower} beats ${computerChoice}`);
        } else if (loseCondition1 || loseCondition2 || loseCondition3) {
            computerScore += 1;
            console.log(`You lost! ${computerChoice} beats ${humanChoiceLower}`);
        } else {
            console.log(`It's a draw!`);
        }
        }
        
        playRound(humanChoice, computerChoice);
    }

    console.log(`Final score: You: ${humanScore} vs Computer: ${computerScore}`);
}