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
  if (e.target.outerText == "👊 Rock") {
    playerSelection = "rock";
  } else if (e.target.outerText == "✋ Paper") {
    playerSelection = "paper";
  } else if (e.target.outerText == "✌ Scissors") {
    playerSelection = "scissors";
  }

  // computer's selection
  computerSelection = getComputerChoice();

  // conditions of game
  if (playerSelection === computerSelection) {
    result.textContent = "Draw...";
  }

  if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore += 1;
    result.textContent = "You Lost, Paper beats Rock...";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore += 1;
    result.textContent = "You Won, Rock beats Scissors...";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore += 1;
    result.textContent = "You Won, Paper beats Rock...";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore += 1;
    result.textContent = "You Lost, Scissors beats Paper...";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore += 1;
    result.textContent = "You Lost, Rock beats Scissors...";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore += 1;
    result.textContent = "You Won, Scissors beats Paper...";
  }

  if (playerScore === 5) {
    final.innerHTML =
      "<div>You Won!</div> <img src='https://cdn3.emoji.gg/emojis/9588-gigachad.png' />";
    final.style.color = "green";
    buttons.forEach((button) => {
      button.removeEventListener("click", playRound);
    });
    result.textContent = "Game Will reset Automatically after 4 second...";
    result.style.color = "red";
    setTimeout(() => {
      window.location.reload();
    }, 4000);
  } else if (computerScore === 5) {
    final.innerHTML =
      "<div>You Lost!</div> <img src='https://cdn3.emoji.gg/emojis/9542-pepesadrain.gif' />";
    final.style.color = "red";
    buttons.forEach((button) => {
      button.removeEventListener("click", playRound);
    });
    result.textContent = "Game Will reset Automatically after 4 second...";
    result.style.color = "red";
    setTimeout(() => {
      window.location.reload();
    }, 4000);
  }

  // counting score
  score.textContent = `🧑 Player: ${playerScore} - 🖥️ Computer: ${computerScore}`;
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", playRound);
});

const result = document.querySelector(".result");
const score = document.querySelector(".score");
const final = document.querySelector(".final-result");
score.textContent = `🧑 Player:  ${playerScore} - 🖥️ Computer: ${computerScore}`;
