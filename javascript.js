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
// console.log(computerSelection); //for debugging


//get player choice
function getPlayerChoice() {
    return playerChoice = prompt(`Enter rock, paper, or scissors: `);
}

let playerSelection = getPlayerChoice().toLowerCase();

//set game rules
'rock' > 'scissors';
'scissors' > 'paper';
'paper' > 'rock';

//compare the choices between the computer and the player
if (computerSelection > playerSelection) {
    console.log( `You lose! ${computerSelection} beats ${playerSelection}` );
} else if (computerSelection < playerSelection) {
    console.log( `You win! ${playerSelection} beats ${computerSelection}` );
} else {
    console.log( `It's a draw` );
};


//output result



//end round



//update score



//start next round



//play 5 rounds in total



//get final scores



//output final result