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

//check user's input for spelling mistakes
function testString(string) {

    //regex to remove white spaces, numbers, and symbols
    let nonAlNumSpace = /[^a-z]/gi;
    string = string.replace(nonAlNumSpace, '');

    //regex to fix any misspellings similar to 'rock'
    let rockSpelling = /^r\w*|\w*([^sci])o\w*|\w*([^rok])c\2\w*|\w*k$/gi;

    //regex to fix any misspelling similar to 'paper'
    let paperSpelling = /^p\w*|\wa\w*|\w+p\w*|\w*e\w|\w*r$/gi;
    
    //regex to fix any misspelling similar to 'scissors'
    let scissorsSpelling = /^s\w+|\w([^rok])c\1\w*|\w*i\w*|\w*s\w*|\w*([^rck])o\2\w*|\w*([^ock])r\3\w*/gi;

    //fix player's input to 'rock', 'paper', or 'scissors'
    if (string.match(rockSpelling)) {
        string = string.replace(rockSpelling, 'rock');
    } else if (string.match(paperSpelling)) {
        string = string.replace(paperSpelling, 'paper');
    } else if (string.match(scissorsSpelling)) {
        string = string.replace(scissorsSpelling, 'scissors');
    } else {
        string = 'rock'; //default to 'rock' if all failed
    };

    return string;

    //console.log(string); //for debugging
}

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

        let playerSelection = testString(getPlayerChoice());
        // console.log(playerSelection); //for debugging
        
        playRound(playerSelection, computerSelection);
        //output scores each round
        console.log(`Round ${i}:`);
        console.log(`You played ${playerSelection}. Your score is ${playerScore}.`);
        console.log(`Computer played ${computerSelection}. Computer score is ${computerScore}.`);
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