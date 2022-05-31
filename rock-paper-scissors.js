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

function playRound(computerSelection) {
  let playerSelection = prompt('Make your choice:');
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === 'rock') {
    switch (computerSelection) {
      case 'paper':
        return `Your choice: ${playerSelection}, computer's choice: ${computerSelection}. Computer wins!!!`;
        break;
      case 'scissors':
        return `Your choice: ${playerSelection}, computer's choice: ${computerSelection}. You win!!!`;
        break;
      default:
        return `It's a tie`;
    }
  } else if (playerSelection === 'paper') {
    switch (computerSelection) {
      case 'scissors':
        return `Your choice: ${playerSelection}, computer's choice: ${computerSelection}. Computer wins!!!`;
        break;
      case 'rock':
        return `Your choice: ${playerSelection}, computer's choice: ${computerSelection}. You win!!!`;
        break;
      default:
        return `It's a tie`;
    }
  } else {
    switch (computerSelection) {
      case 'rock':
        return `Your choice: ${playerSelection}, computer's choice: ${computerSelection}. Computer wins!!!`;
        break;
      case 'paper':
        return `Your choice: ${playerSelection}, computer's choice: ${computerSelection}. You win!!!`;
        break;
      default:
        return `It's a tie`;
    }
  }
}

function game() {
  for (let i = 1; i <= 5; i++) {
    console.log(playRound(computerPlay()));
  }
}

game();
