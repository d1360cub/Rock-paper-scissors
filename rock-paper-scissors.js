let computerChoice = 'rock';

function computerPlay() {
  let randomNumber = Math.random() * 10 + 1;
  randomNumber = parseInt(randomNumber);
  if (randomNumber > 0 && 3 >= randomNumber) {
    return (computerChoice = 'rock');
  } else if (randomNumber > 3 && 6 >= randomNumber) {
    return (computerChoice = 'paper');
  } else {
    return (computerChoice = 'scissors');
  }
}

function playRound() {
  let userWins = 0;
  let PCWins = 0;
  let ties = 0;
  for (let i = 1; i <= 5; i++) {
    let computerSelection = computerPlay();
    let playerSelection = prompt('Make your choice:');
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'rock') {
      switch (computerSelection) {
        case 'paper':
          PCWins = PCWins + 1;
          console.log(
            `Your choice: ${playerSelection}, computer's choice: ${computerSelection}. Computer wins!!!`
          );
          break;
        case 'scissors':
          userWins = userWins + 1;
          console.log(
            `Your choice: ${playerSelection}, computer's choice: ${computerSelection}. You win!!!`
          );
          break;
        default:
          ties = ties + 1;
          console.log(`It's a tie`);
      }
    } else if (playerSelection === 'paper') {
      switch (computerSelection) {
        case 'scissors':
          PCWins = PCWins + 1;
          console.log(
            `Your choice: ${playerSelection}, computer's choice: ${computerSelection}. Computer wins!!!`
          );
          break;
        case 'rock':
          userWins = userWins + 1;
          console.log(
            `Your choice: ${playerSelection}, computer's choice: ${computerSelection}. You win!!!`
          );
          break;
        default:
          ties = ties + 1;
          console.log(`It's a tie`);
      }
    } else {
      switch (computerSelection) {
        case 'rock':
          PCWins = PCWins + 1;
          console.log(
            `Your choice: ${playerSelection}, computer's choice: ${computerSelection}. Computer wins!!!`
          );
          break;
        case 'paper':
          userWins = userWins + 1;
          console.log(
            `Your choice: ${playerSelection}, computer's choice: ${computerSelection}. You win!!!`
          );
          break;
        default:
          ties = ties + 1;
          console.log(`It's a tie`);
      }
    }
  }
  if (userWins > PCWins) {
    console.log(`You win, ${userWins} to ${PCWins}`);
  } else if (userWins < PCWins) {
    console.log(`You lose, ${userWins} to ${PCWins}`);
  } else {
    console.log(`It's a tie`);
  }
}

playRound();
