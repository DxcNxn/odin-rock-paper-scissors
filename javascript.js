//rock-paper-scissors game

const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

//compare the choices between the computer and the player
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return playerScore += 0;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
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
    }
}

//playRound(playerSelection, computerSelection); //for debugging

//output result
// console.log(playerScore); //for debugging
// console.log(computerScore); //for debugging

//play 5 rounds in total
function game() {
    for (let i = 1; i <= 5; i++) {     
        
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
            
            //user input
            return playerChoice = prompt(`Enter rock, paper, or scissors: `);
        }

        let playerSelection = getPlayerChoice().toLowerCase();
        // console.log(playerSelection); //for debugging
        
        playRound(playerSelection, computerSelection);
        //output scores each round
        console.log(`Round ${i}:`);
        console.log(`Your score is ${playerScore}.`);
        console.log(`Computer score is ${computerScore}.`);
    }
}

game();

//output final result
if (playerScore > computerScore) {
    console.log(`Congrats! You won!`);
} else if (playerScore < computerScore) {
    console.log(`You lost! Noob!`);
} else {
    console.log(`It's a tie. Try again!`);
}