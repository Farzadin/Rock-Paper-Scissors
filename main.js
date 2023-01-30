let playerScore = 0;
let computerScore = 0;
let playerSelection = "";
let computerSelection = "";

// function getComputerChoice randomly pick value form Array "choices" and
// return it.
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(e) {
  // player's selection
  if (e.target.outerText == "Rock") {
    playerSelection = "rock";
  } else if (e.target.outerText == "Paper") {
    playerSelection = "paper";
  } else if (e.target.outerText == "Scissors") {
    playerSelection = "scissors";
  }

  // computer's selection
  computerSelection = getComputerChoice();

  // conditions of game
  if (playerSelection === computerSelection) {
    result.textContent = `Draw ${playerScore}-${computerScore}`;
  }

  if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore += 1;
    result.textContent = `You Lost, Paper beats Rock , ${playerScore}-${computerScore}`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore += 1;
    result.textContent = `You Won, Rock beats Scissors, ${playerScore}-${computerScore}`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore += 1;
    result.textContent = `You Won, Paper beats Rock, ${playerScore}-${computerScore}`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore += 1;
    result.textContent = `You Lost, Scissors beats Paper, ${playerScore}-${computerScore}`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore += 1;
    result.textContent = `You Lost, Rock beats Scissors, ${playerScore}-${computerScore}`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore += 1;
    result.textContent = `You Won, Scissors beats Paper, ${playerScore}-${computerScore}`;
  }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", playRound);
});

const result = document.querySelector(".result");
