function getComputerChoice() {
  // Create a list "choices" with "Rock Paper Scissors" included as its values.
  const choices = ["Rock", "Paper", "Scissors"];
  // Randomly pick a index number of the list choices and return it in the output
  return choices[Math.floor(Math.random() * 3)];
}
