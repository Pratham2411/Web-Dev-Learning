let minRange = 1;
let maxRange = 100;
let maxAttempts = 7;

let secretNumber = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
let attemptsLeft = maxAttempts;

const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const resetBtn = document.getElementById("resetBtn");
const message = document.getElementById("message");
const attemptsText = document.getElementById("attempts-left");
const minText = document.getElementById("min-range");
const maxText = document.getElementById("max-range");

const wrongSound = new Audio("sounds/wrong.mp3");
const correctSound = new Audio("sounds/correct.mp3");
const loseSound = new Audio("sounds/lose.mp3");

wrongSound.volume = 0.4;
correctSound.volume = 0.6;
loseSound.volume = 0.5;

minText.textContent = minRange;
maxText.textContent = maxRange;
attemptsText.textContent = attemptsLeft;

guessBtn.onclick = function () {
    let guess = Number(guessInput.value);

    if (!guess || guess < minRange || guess > maxRange) {
        message.textContent = "Enter a valid number in range";
        guessInput.focus();
        return;
    }

    attemptsLeft--;
    attemptsText.textContent = attemptsLeft;

    if (guess === secretNumber) {
        correctSound.currentTime = 0;
        correctSound.play();
        message.textContent = "🎉 Correct! You won!";
        endGame();
        return;
    }

    if (attemptsLeft === 0) {
        loseSound.currentTime = 0;
        loseSound.play();
        message.textContent = "❌ Game Over! Number was " + secretNumber;
        endGame();
        return;
    }

    wrongSound.currentTime = 0;
    wrongSound.play();
    message.textContent = guess > secretNumber ? "Too high" : "Too low";

    guessInput.value = "";
    guessInput.focus();
};


resetBtn.onclick = function () {
    secretNumber = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
    attemptsLeft = maxAttempts;
    attemptsText.textContent = attemptsLeft;
    message.textContent = "Game reset. Start guessing!";
    guessInput.value = "";
    guessInput.disabled = false;
    guessBtn.disabled = false;

    wrongSound.currentTime = 0;
    correctSound.currentTime = 0;
    loseSound.currentTime = 0;
};

function endGame() {
    guessInput.disabled = true;
    guessBtn.disabled = true;
}
