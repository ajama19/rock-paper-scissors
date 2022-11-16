// script.js

/* This code removes the introduction text once the animation has completed
and makes game user interface appear */
let intro = document.getElementById('introduction');
intro.addEventListener('animationend', (event) => {
    let gameUI = document.getElementById('interface');
    intro.setAttribute('class', 'hidden');
    gameUI.setAttribute('class', 'game-ui');
});









// functions for playing the game
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomNum = Math.floor(Math.random() * 3); 
    return choices[randomNum];
}

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();
    if (playerChoice === computerSelection) {
        return "tie";
        //when player wins
    } else if ((playerChoice === "rock" && computerSelection === "scissors") || (playerChoice === "scissors" && computerSelection === "paper") || (playerChoice === "paper" && computerSelection === "rock")) {
        return "win";
    } else if ((playerChoice === "rock" && computerSelection === "paper") || (playerChoice === "paper" && computerSelection === "scissors") || (playerChoice === "scissors" && computerSelection === "rock")) {
        return "lose";
    }
}

// function game() {
//     let playerScore = 0;
//     let computerScore = 0;
//     //play a 5 round game
//     for (let i = 0; i < 5; i++) {
//         let playerInput = prompt("Rock, paper, or scissors? Which will you choose?");
//         let computerInput = getComputerChoice();
//         let gameResult = playRound(playerInput, computerInput);
        
//         if (gameResult === "win") {
//             ++playerScore;
//             console.log("You won this round! :)");
//         } else if (gameResult === "lose") {
//             ++computerScore;
//             console.log("You lost this round :(");
//         } else if (gameResult === "tie") { 
//             ++computerScore;
//             ++playerScore;
//             console.log("It's a tie! o_o");
//         }
//     }

//     if (playerScore > computerScore) {
//         console.log("You WIN!!!!!!");
//     } else if (playerScore < computerScore) {
//         console.log("NOOOOOOO YOU LOST!");
//     } else if (playerScore === computerScore) {
//         console.log("It's a tie!")
//     }
// }

// game();