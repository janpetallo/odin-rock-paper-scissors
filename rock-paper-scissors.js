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
    if(playerSelection === computerSelection){
        return "It's a TIE! Repeat this round!"
    }

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

let playerWins = 0;
let computerWins = 0;

const body = document.querySelector('body');

const title = document.createElement('h2');
title.textContent = 'Rock Paper Scissors';

body.appendChild(title);

const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorsBtn = document.createElement('button');

rockBtn.classList.add('rock');
paperBtn.classList.add('paper');
scissorsBtn.classList.add('scissors');

rockBtn.textContent = 'Rock';
paperBtn.textContent = 'Paper';
scissorsBtn.textContent = 'Scissors';

body.appendChild(rockBtn);
body.appendChild(paperBtn);
body.appendChild(scissorsBtn);

const buttons = document.querySelectorAll('button');

const player = document.createElement('div');
const computer = document.createElement('div');
const roundResult = document.createElement('div');
const standing = document.createElement('div');
const winner = document.createElement('h3');

// iterate through each the buttons/choices
buttons.forEach((button) => {
    // and for each one, add a 'click' event listener
    button.addEventListener('click', () => {
        let computerSelection = getComputerChoice();
        let playerSelection = button.className;
        
        console.log("You selected: " + playerSelection);
        console.log("Computer selected: " + computerSelection);

        player.textContent = "You selected: " + playerSelection;
        computer.textContent = "Computer selected: " + computerSelection;
        body.appendChild(player);
        body.appendChild(computer);

        roundResult.textContent = playRound(playerSelection, computerSelection);
        body.appendChild(roundResult);

        standing.textContent = "Your Wins: " + playerWins + "     Computer Wins: " + computerWins;
        body.appendChild(standing);

        if(playerWins === 5 || computerWins === 5){
            if(playerWins === 5){
                winner.textContent = 'Congratulations! You win!';
            } else {
                winner.textContent = "Better luck next time! Computer wins!"
            }
            body.appendChild(winner);
            playerWins = 0;
            computerWins = 0;
        }
    });
});



