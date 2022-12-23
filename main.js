// function getComputerChoice randomly pick value form Array "choices" and return it.
function getComputerChoice() {
  // Create a list "choices" with "Rock Paper Scissors" included as its values.
  const choices = ["Rock", "Paper", "Scissors"];
  // Randomly pick a index number of the list choices and return it in the output
  return choices[Math.floor(Math.random() * 3)];
}

// Function PlayRound simulate one round of rock paper scissors.
function playRound(playerSelection, computerSelection) {
  // get input from user and store it in playerSelection.
  playerSelection = prompt("Rock, Paper or Scissors? ");
  // invoke getComputerChoice and store its returned value in computerSelection.
  computerSelection = getComputerChoice();

  // winner message: as Rock beats Scissors.
  wonRockVsScissors = "You Won, Rock beats Scissors";
  // winner message: as Paper beats Rock.
  wonPaperVsRock = "You Won, Paper beats Rock";
  // winner message: as Scissors beats Paper.
  wonScissorsVsPaper = "You Won, Scissors beats Paper";

  // Loser message: as Rock lose to Scissors.
  lostRockVsScissors = "You Lost,Rock beats Scissors";
  // Loser message: as Rock lose to Paper.
  lostPaperVsRock = "You Lost, Rock beats Paper";
  // Loser message: as Scissors lose to paper.
  lostScissorsVsPaper = "You Lost, Scissors beats Paper";

  // Draw message : as both of them are same values.
  draw = "Draw";

  // if both of them chose the same value. return the draw message.
  if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
    return draw;
  }

  // if computer "beats" the player with "paper"
  if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection.toLowerCase() === "paper"
  ) {
    return lostPaperVsRock;
    // if Player "win" against the computer with the "rock"
  } else if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection.toLowerCase() === "scissors"
  ) {
    return wonRockVsScissors;
    // if Player "win" against the computer with the "paper"
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection.toLowerCase() === "rock"
  ) {
    return wonPaperVsRock;
    // if computer "beats" the player with the "scissors"
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection.toLowerCase() === "scissors"
  ) {
    return lostScissorsVsPaper;
    // if computer "beats" the player with the "rock"
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection.toLowerCase() === "rock"
  ) {
    return lostRockVsScissors;
    // if the player "win" against the computer with "scissors"
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection.toLowerCase() === "paper"
  ) {
    return wonScissorsVsPaper;
  }
}
