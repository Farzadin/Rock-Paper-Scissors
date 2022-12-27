let playerScore = 0;
let computerScore = 0;

// function getComputerChoice randomly pick value form Array "choices" and
// return it.
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

// Function PlayRound simulate one round of rock paper scissors.
function playRound(playerSelection, computerSelection) {
  playerSelection = prompt("Rock, Paper or Scissors? ");
  computerSelection = getComputerChoice();

  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    console.log(`Draw ${playerScore}-${computerScore}`);
  }

  if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection.toLowerCase() === "paper"
  ) {
    computerScore += 1;
    console.log(`You Lost, Paper beats Rock , ${playerScore}-${computerScore}`);
  } else if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection.toLowerCase() === "scissors"
  ) {
    playerScore += 1;
    console.log(
      `You Won, Rock beats Scissors, ${playerScore}-${computerScore}`
    );
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection.toLowerCase() === "rock"
  ) {
    playerScore += 1;
    console.log(`You Won, Paper beats Rock, ${playerScore}-${computerScore}`);
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection.toLowerCase() === "scissors"
  ) {
    computerScore += 1;
    console.log(
      `You Lost,Scissors beats Paper,${playerScore}-${computerScore}`
    );
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection.toLowerCase() === "rock"
  ) {
    computerScore += 1;
    console.log(`You Lost,Rock beats Scissors,${playerScore}-${computerScore}`);
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection.toLowerCase() === "paper"
  ) {
    playerScore += 1;
    console.log(
      `You Won, Scissors beats Paper, ${playerScore}-${computerScore}`
    );
  }
}

// function game() would iterate the playRound function 5 times
function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }

  console.log(finalResult());
  resetGame();
}

// function finalResult would declare the winner or loser and return message
// base on that
function finalResult() {
  if (playerScore == computerScore) {
    return "Draw!";
  } else if (playerScore > computerScore) {
    return "Winner, Winner chicken dinner!";
  } else {
    return "Game Over!";
  }
}

// Function playAgain would reset the Score on both sides
function resetGame() {
  playerScore = 0;
  computerScore = 0;
}
