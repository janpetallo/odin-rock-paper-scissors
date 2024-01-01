/*
1. get input from user - case-insensitive
2. validate user input
3. get computer generated choice
4. play round 1 to 5
*/

function validateUserInput(playerSelection) {
    if(playerSelection === "rock" || playerSelection === "scissors" || playerSelection === "paper"){
        return true;
    } else {
        return false;
    }
}

function getComputerChoice() {
    let randomNum = Math.floor( Math.random() * 100 );

    if(randomNum > 70) return "rock";
    else if(randomNum > 35) return "paper";
    else return "scissors";
}

function playRound(playerSelection, computerSelection){
    switch (playerSelection) {
        case "rock":
            if(computerSelection === "paper"){
                computerWins++;
                return "You lose! Paper beats Rock";
            }
            else if(computerSelection === "scissors") {
                playerWins++;
                return "You win! Rock beats scissors";
            }
                
            break;

        case "paper":
            if(computerSelection === "rock") {
                playerWins++;
                return "You win! Paper beats Rock";
            }
                
            else if(computerSelection === "scissors") {
                computerWins++;
                return "You lose! Scissors beat paper";
            }
            break;

        case "scissors":
            if(computerSelection === "paper"){
                playerWins++;
                return "You win! Scissors beat Paper";
            } 
            else if(computerSelection === "rock"){
                computerWins++;
                return "You lose! Rock beats scissors";
            } 
            break;
    }
}

function game() {
    let numberOfRounds = 1;
    
    // play 5 rounds
    while(numberOfRounds <= 5){
        console.log("ROUND " + numberOfRounds );

        let playerSelection = prompt("Enter your choice (rock, paper, scissors): ");
        playerSelection = playerSelection.toLowerCase();
        
        while(!validateUserInput(playerSelection)){
            playerSelection = prompt("INVALID CHOICE (choose between rock, paper, scissors): ");
            playerSelection = playerSelection.toLowerCase();
        }

        console.log("You select: " + playerSelection);
        
        let computerSelection = getComputerChoice();
        console.log("Computer Selects: " + computerSelection);
        
        if(playerSelection == computerSelection){
            console.log("It's a tie! Play this round again!");
            continue; // back to start of this round
        }

        console.log(playRound(playerSelection, computerSelection));
        numberOfRounds++;
        console.log("Your wins: " + playerWins);
    }

    if(playerWins > computerWins) console.log("CONGRATULATIONS! YOU ARE THE OVERALL WINNER!");
    else console.log("BETTER LUCK NEXT TIME! COMPUTER WINS!");
}

let playerWins = 0;
let computerWins = 0;
game();



