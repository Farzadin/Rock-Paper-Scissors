// function getComputerChoice randomly pick value form Array "choices" and return it.
function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

// Function PlayRound simulate one round of rock paper scissors.
function playRound(playerSelection, computerSelection) {
  playerSelection = prompt("Rock, Paper or Scissors? ");
  computerSelection = getComputerChoice();

  wonRockVsScissors = "You Won, Rock beats Scissors";
  wonPaperVsRock = "You Won, Paper beats Rock";
  wonScissorsVsPaper = "You Won, Scissors beats Paper";

  lostRockVsScissors = "You Lost,Rock beats Scissors";
  lostPaperVsRock = "You Lost, Rock beats Paper";
  lostScissorsVsPaper = "You Lost, Scissors beats Paper";

  draw = "Draw";

  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return draw;
  }

  if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection.toLowerCase() === "paper"
  ) {
    return lostPaperVsRock;
  } else if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection.toLowerCase() === "scissors"
  ) {
    return wonRockVsScissors;
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection.toLowerCase() === "rock"
  ) {
    return wonPaperVsRock;
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection.toLowerCase() === "scissors"
  ) {
    return lostScissorsVsPaper;
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection.toLowerCase() === "rock"
  ) {
    return lostRockVsScissors;
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection.toLowerCase() === "paper"
  ) {
    return wonScissorsVsPaper;
  }
}
