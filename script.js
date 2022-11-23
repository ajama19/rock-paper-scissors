// script.js

/* This code removes the introduction text once the animation has completed
and makes game user interface appear */
let intro = document.getElementById('introduction');
let gameUI = document.getElementById('interface');
intro.addEventListener('animationend', (event) => {
    intro.setAttribute('class', 'hidden');
    gameUI.setAttribute('class', 'game-ui');
});


// functions for playing the game
let playerTotal = 0;
let computerTotal = 0;
let playerScore = document.getElementById('player');
let computerScore = document.getElementById('computer');
let outputText = document.getElementById('output-text');
let stoneBtn = document.getElementById('stone-btn');
let scrollBtn = document.getElementById('scroll-btn');
let kunaiBtn = document.getElementById('kunai-btn');

let playerWin = document.getElementById('game-end-win'); //document selector for player win screen
let playerLose = document.getElementById('game-end-loss');
let playerTie = document.getElementById('game-end-tie');

stoneBtn.addEventListener('click', playRound);
scrollBtn.addEventListener('click', playRound);
kunaiBtn.addEventListener('click', playRound);

// declarations for game end buttons
let playAgainWinBtn = document.getElementById('play-again-win');
let playAgainLoseBtn = document.getElementById('play-again-lose');
let playAgainTieBtn = document.getElementById('play-again-tie');


// getComputer choice returns a string representing the computer's move
function getComputerChoice() {
    const choices = ["stone", "scroll", "kunai"];
    let randomNum = Math.floor(Math.random() * 3); 
    return choices[randomNum];
}


// updateScore updates the scores for both the player and computer
function updateScore(result) {
    if (result === 'draw') {
        ++playerTotal;
        ++computerTotal;
        playerScore.textContent = "You: " + playerTotal;
        computerScore.textContent = "Enemy: " + computerTotal;
    } else if (result === 'victory') {
        ++playerTotal;
        playerScore.textContent = "You: " + playerTotal;
    } else if (result === 'failure') {
        ++computerTotal;
        computerScore.textContent = "Enemy: " + computerTotal;
    }
}



// playRound plays a round of the game and ends it after 5 rounds
// 3 parts
// first plays audio corresponding to clicked button
// then compares player choice to computers and chooses a winner, updating score
// finally 
function playRound() {
    let playerChoice = this.className;
    let computerChoice = getComputerChoice();

    //first play the audio that corresponds to the clicked button
    if (playerChoice === 'kunai') {
        let audio1 = document.getElementById('audio1');
        audio1.play();
    } else if (playerChoice === 'stone') {
        let audio3 = document.getElementById('audio3');
        audio3.play();
    } else if (playerChoice === 'scroll') {
        let audio2 = document.getElementById('audio2');
        audio2.play();
    }

    //then compare the player choice to the computer choice
    // choose a victor and update the scores and the text div @ the bottom
    if (playerChoice === computerChoice) {
        outputText.textContent = 'Draw';
        updateScore('draw');

    } else if ((playerChoice === 'stone' && computerChoice === 'kunai') || 
    (playerChoice === 'kunai' && computerChoice === 'scroll') || (playerChoice 
        === 'scroll' && computerChoice === 'stone')) {
            outputText.textContent = 'Victory!';
            updateScore('victory');

    } else if ((playerChoice === 'stone' && computerChoice === 'scroll') || 
    (playerChoice === 'kunai' && computerChoice === 'stone') || (playerChoice 
        === 'scroll' && computerChoice === 'kunai')) {
            outputText.textContent = 'Failure!';
            updateScore('failure');

    }

    //check scores to see if one of the players has reached 5 points
    //if they have declare a winner, & switch to the replay screen
    //if the player wins
    if (playerTotal === 5) {
        gameUI.setAttribute('class', 'hidden');
        playerWin.setAttribute('class', 'game-win');

    //if the computer wins    
    } else if (computerTotal === 5) {
        gameUI.setAttribute('class', 'hidden');
        playerLose.setAttribute('class', 'game-lose');

    //if there is a tie
    } else if (playerTotal === 5 && computerTotal === 5) {
        gameUI.setAttribute('class', 'hidden');
        playerTie.setAttribute('class', 'game-tie');
    }


}

// game end screen buttons
playAgainWinBtn.addEventListener('click', () => {
    playerWin.setAttribute('class', 'hidden');
    gameUI.setAttribute('class', 'game-ui');
    playerTotal = 0;
    computerTotal = 0;
    playerScore.textContent = "You: " + playerTotal;
    computerScore.textContent = "Enemy: " + computerTotal;
    outputText.textContent = "Choose your weapon!";

}, {capture: true});
playAgainLoseBtn.addEventListener('click', () => {
    playerLose.setAttribute('class', 'hidden');
    gameUI.setAttribute('class', 'game-ui');
    playerTotal = 0;
    computerTotal = 0;
    playerScore.textContent = "You: " + playerTotal;
    computerScore.textContent = "Enemy: " + computerTotal;
    outputText.textContent = "Choose your weapon!";

}, {capture: true});
playAgainTieBtn.addEventListener('click', () => {
    playerTie.setAttribute('class', 'hidden');
    gameUI.setAttribute('class', 'game-ui');
    playerTotal = 0;
    computerTotal = 0;
    playerScore.textContent = "You: " + playerTotal;
    computerScore.textContent = "Enemy: " + computerTotal;
    outputText.textContent = "Choose your weapon!";

}, {capture: true});




