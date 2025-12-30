const choices = ["rock", "paper", "scissor"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const finalResult = document.getElementById("finalResult");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");

let playerScore = 0;
let computerScore = 0;
const WIN_SCORE = 5;
let gameOver = false;

function playGame(playerChoice){
    if(gameOver) return;

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE!";
    } else {
        switch(playerChoice){
            case "rock":
                result = computerChoice === "scissor" ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = computerChoice === "rock" ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissor":
                result = computerChoice === "paper" ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    resultDisplay.classList.remove("greenText","redText");

    if(result === "YOU WIN!"){
        playerScore++;
        resultDisplay.classList.add("greenText");
    } 
    else if(result === "YOU LOSE!"){
        computerScore++;
        resultDisplay.classList.add("redText");
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    playerScoreDisplay.textContent = `Player: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;

    checkWinner();
}

function checkWinner(){
    if(playerScore === WIN_SCORE){
        finalResult.textContent = "🎉 YOU WON THE MATCH!";
        finalResult.classList.add("greenText");
        gameOver = true;
    }
    else if(computerScore === WIN_SCORE){
        finalResult.textContent = "💀 COMPUTER WON THE MATCH!";
        finalResult.classList.add("redText");
        gameOver = true;
    }
}

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    gameOver = false;

    playerScoreDisplay.textContent = "Player: 0";
    computerScoreDisplay.textContent = "Computer: 0";
    playerDisplay.textContent = "Player:";
    computerDisplay.textContent = "Computer:";
    resultDisplay.textContent = "";
    finalResult.textContent = "";
    finalResult.classList.remove("greenText","redText");
}
