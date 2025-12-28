// fixed min and max values
const min = 1;
const max = 50;

const generateBtn = document.getElementById("generateBtn");
const result = document.getElementById("result");

generateBtn.onclick = function () {
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    result.textContent = `Result: ${randomNum}`;
};
