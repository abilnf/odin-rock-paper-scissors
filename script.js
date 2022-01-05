function computerPlay() {
  const option = Math.floor(Math.random() * 3)
  return option == 0 ? "rock" : option == 1 ? "paper" : "scissors"
}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1)
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  const won = playerSelection === "paper" && computerSelection === "rock" ||
    playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "scissors" && computerSelection === "paper";
  const draw = playerSelection === computerSelection;
  return draw ? "It's a draw!" : `You ${won ? "Win" : "Lose"}! ${capitalize(won ? playerSelection : computerSelection)} beats ${capitalize(!won ? playerSelection : computerSelection)}!`
}

let playerWins = 0;
let computerWins = 0;
let draws = 0

document.querySelectorAll("button.rps").forEach(button => {
  button.addEventListener("click", e => {
    const playerInput = e.target.getAttribute("id")
    const result = playRound(playerInput, computerPlay())
    if (result.startsWith("You W")) {
      playerWins++
    } else if (result.startsWith("You L")) {
      computerWins++
    } else {
      draws++
    }
    let results = document.querySelector("#results")
    results.innerHTML = `${result}<br>
    <br>
    Total Wins: ${playerWins}<br>
    Total Losses: ${computerWins}<br>
    Total Draws: ${draws}`

    if (playerWins + computerWins + draws == 5) {
      results.innerHTML += `<br><br>So the end result is a ${playerWins > computerWins ? "WIN" : computerWins > playerWins ? "LOSS" : "DRAW"}`
      playerWins = 0
      computerWins = 0
      draws = 0
    }
  });
});