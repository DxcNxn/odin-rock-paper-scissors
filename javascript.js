//rock-paper-scissors game

const choices = ['rock', 'paper', 'scissors'];

//get computer choice
function getComputerChoice() {
    //generate a random number within the length of choices array
    let pickNum = Math.floor(Math.random() * choices.length);
    //use generated number above to pull a property from choices array
    return computerChoice = choices[pickNum];
}

let computerSelection = getComputerChoice();
console.log(computerSelection); //for debugging


//get player choice
function getPlayerChoice() {
    return playerChoice = prompt(`Enter rock, paper, or scissors: `);
}

let playerSelection = getPlayerChoice().toLowerCase();
console.log(playerSelection); //for debugging

//compare the choices between the computer and the player
function playRound(playerSelection, computerSelection) {
    playerScore = 0;
    computerScore = 0;
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return playerScore += 1;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return computerScore += 1;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return computerScore += 1;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return playerScore += 1;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return playerScore += 1;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return computerScore += 1;
    } else if (playerSelection === computerSelection) {
        return `It's a draw`;
    }
}


//output result



//end round



//update score



//start next round



//play 5 rounds in total



//get final scores



//output final result