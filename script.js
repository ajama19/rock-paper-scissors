// script.js

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomNum = Math.floor(Math.random() * 3); 
    return choices[randomNum];
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase;
    if (playerChoice === computerSelection) {
        return "tie";
        //when player wins
    } else if ((playerChoice === "rock" && computerSelection === "scissors") || (playerChoice === "scissors" && computerSelection === "paper") || (playerChoice === "paper" && computerSelection === "rock")) {
        return "win";
    } else if ((playerChoice === "rock" && computerSelection === "paper") || (playerChoice === "paper" && computerSelection === "scissors") || (playerChoice === "scissors" && computerSelection === "rock")) {
        return "lose";
    }
}

//function game() {
    //ask for player input

    //call playRound
//}