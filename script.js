function computerPlay() {
  const option = Math.floor(Math.random()*3)
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

function game() {
  let playerWins = 0;
  let computerWins = 0;
  for (i = 0; i < 5; i++) {
    let playerInput = prompt("What do you pick?")
    const result = playRound(playerInput, computerPlay())
    if (result.startsWith("You W")) {
      playerWins++
    } else if (result.startsWith("You L")) {
      computerWins++
    }
    console.log(result)
  }
  console.log(`Wins: ${playerWins}`)
  console.log(`Losses: ${computerWins}`)
  console.log(`Draws: ${5-playerWins-computerWins}`)
}